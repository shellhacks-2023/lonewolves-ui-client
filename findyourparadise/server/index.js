import express from 'express';
import cors from 'cors';
import axios from 'axios';

const app = express();

app.use(cors());
app.use(express.json());

app.post('/myparadise', (req, res) => {
  axios({
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    url: 'http://training.us-hpccsystems-dev.azure.lnrsg.io:8002/WsEcl/soap/query/roxie/findurparadisesvc_jeff5.1?ver_=0',
    withCredentials: false,
    data: {"workshop.findurparadisesvc.1": req.body},
  })
  .then((data)  => {
    let paradiseData = data.data['workshop.findurparadisesvc.1Response'].Results['result_1'];
    console.log(paradiseData)
    res.send(paradiseData)
  })
  .catch((err) => {
    res.send(err.data)
  })
})


try {
  app.listen(3000, () => {
    console.log('Listening on port 3000');
  })
} catch (error) {
  console.log('Error spinning up server');
}