import { Typography, Box } from "@mui/material";

function NerOutput({ data }) {

    console.log("NER data");
    console.log(data);

    // Send a request
    return (
        <Box>
            {
                data.result.map((ner, i) => {
                    return (
                        <Box key={i}>
                            <Typography variant="h6">Text = {ner.text}; Label = {ner.label}; Start = {ner.start}; End = {ner.end}</Typography>
                        </Box>
                    );
                })
            }
        </Box>
    );

}

export default NerOutput;