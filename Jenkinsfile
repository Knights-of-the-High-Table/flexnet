pipeline {
    agent {
        node{
            label 'docker-agent-aws-nodejs'
        }
    }
      environment{
        S3_BUCKET = credentials('flexnet_s3_bucket')
        CLOUDFRONT_DISTRIBUTION_ID = credentials('flexnet_cloudfront_distribution_id')
        HOME = "${env.WORKSPACE}"
      }
      stages {
        stage('Detect Changes') {
            steps {
                script {
                    changedFiles = sh(script: 'git diff --name-only HEAD~1', returnStdout: true).trim().split("\n")
                    echo "Changed files: ${changedFiles}"  
                }
            }
        }

        stage('Verify Tools') {
            steps {
                // Check if aws, node, and npm are available
                sh 'ls -l /usr/local/aws-cli/v2/current/dist/aws'
                sh 'which aws || echo "AWS CLI not found"'
                sh '/usr/local/aws-cli/v2/current/dist/aws --version || echo "AWS CLI not available"'
                sh 'which node || echo "Node.js not found"'
                sh 'node --version || echo "Node.js not available"'
                sh 'which npm || echo "npm not found"'
                sh 'npm --version || echo "npm not available"'
            }
        }

        stage('Build Frontend') {
            when {
                expression {
                    changedFiles.any { it.startsWith('flexnet-frontend/') }
                }
            }
            steps {
                dir('flexnet-frontend') {
                    sh 'npm install'
                    sh 'npm run build'
                }
            }
        }

        stage('Build and Test Microservices') {
            parallel {
                stage('Microservice 1') {
                    when {
                        expression {
                            changedFiles.any { it.startsWith('microservice-1/') }
                        }
                    }
                    steps {
                        dir('microservice-1') {
                            script {
                                docker.build("${DOCKER_REGISTRY}/microservice-1:latest")
                            }
                            sh './gradlew build'
                            sh './gradlew test'
                        }
                    }
                }
                stage('Microservice 2') {
                    when {
                        expression {
                            changedFiles.any { it.startsWith('microservice-2/') }
                        }
                    }
                    steps {
                        dir('microservice-2') {
                            script {
                                docker.build("${DOCKER_REGISTRY}/microservice-2:latest")
                            }
                            sh './gradlew build'
                            sh './gradlew test'
                        }
                    }
                }
                stage('Microservice 3') {
                    when {
                        expression {
                            changedFiles.any { it.startsWith('microservice-3/') }
                        }
                    }
                    steps {
                        dir('microservice-3') {
                            script {
                                docker.build("${DOCKER_REGISTRY}/microservice-3:latest")
                            }
                            sh './gradlew build'
                            sh './gradlew test'
                        }
                    }
                }
            }
        }

        stage('Deploy Frontend to s3 bucket'){
            when {
                expression {
                    changedFiles.any { it.startsWith('flexnet-frontend/') }
                }
            }
            steps{
                dir('flexnet-frontend') {
                    script {
                        sh 'aws s3 sync dist/ s3://${S3_BUCKET}/ --delete'
                    }
                }
            }
        }
        stage('Invalidate CloudFront Cache') {
            when {
                expression { return env.CLOUDFRONT_DISTRIBUTION_ID != '' }
            }
            steps {
                script {
                    // Invalidate CloudFront cache to reflect the new changes immediately
                    sh 'aws cloudfront create-invalidation --distribution-id $CLOUDFRONT_DISTRIBUTION_ID --paths "/*"'
                }
            }
        }
    }
    post {
        always {
            cleanWs()
        }
    }
}
