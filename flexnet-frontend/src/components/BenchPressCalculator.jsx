import { Button, Card, CardContent, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField, Typography } from "@mui/material";

export default function BenchPressCalculator() {
    return (
        <Card sx={{mb: 2}}>                          
                <CardContent sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '20px'
                }}>
                    <TextField id="weight" variant="outlined" label="Weight" type="number"/>
                    <FormControl>
                        <FormLabel>Weight unit</FormLabel>
                        <RadioGroup row >
                            <FormControlLabel value="kgs" control={<Radio />} label="Kgs" />
                            <FormControlLabel value="lbs" control={<Radio />} label="Lbs" />
                        </RadioGroup>   
                    </FormControl>                            
                    <TextField id="reps" variant="outlined" label="Reps" type="number"/>
                    <Button variant="contained">Calculate</Button>
                    <TextField id="onerepmax" variant="outlined" label="One Rep Max" value="225 kg" slotprops={{input:{readOnly: true}}}/>
                </CardContent>                      
            </Card>
    )
}