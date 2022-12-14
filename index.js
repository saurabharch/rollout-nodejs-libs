const express = require('express');
const bodyParser = require('body-parser');
// const { RolloutClient } = require('@tiledesk/tiledesk-client');
const { RolloutClient } = require('./rollout-client');

const app = express();
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello Rollout nodejs APIs!')
});

app.post('/sendmessage', (req, res) => {
  const project_id = req.body.project_id;
  const recipient_id = req.body.recipient_id;
  const token = req.body.token;
  const text = req.body.text;
  
  // RolloutClient instance is the preferred method

  const tdclient = new RolloutClient(
    {
      projectId: project_id,
      token: token
    });

  tdclient.sendMessage(
    {
      text: text
    }, recipient_id
  );

  res.send({success: true});
});

app.post('/sendmessageraw', (req, res) => {
  const project_id = req.body.project_id;
  const recipient_id = req.body.recipient_id;
  const token = req.body.token;
  const text = req.body.text;

  // Raw is an uncommon method but it's useful
  // to have
  
  RolloutClient.sendMessageRaw(
    "https://api.rollout.com/v2",
    token,
    project_id,
    {
      text: text + " raw"
    },
    recipient_id,
    function(err, res) {
      console.log("Message sent.");
    }
  );

  res.send({success: true});
})

app.post('/anonymauth', (req, res) => {
  console.log("/anonymtoken");
  const project_id = req.body.project_id

  // Or raw (uncommon method)
  
  RolloutClient.anonymousAuthentication(
    project_id,
    function(err, response, resbody) {
      console.log("Got token", resbody);
      if (!err && resbody) {
        res.send(resbody);
      }
      else {
        res.send({success: false, err: err});
      }
    }
  );
})

app.post('/opennow', (req, res) => {
  console.log("/anonymtoken");
  const project_id = req.body.project_id
  RolloutClient.anonymousAuthentication(
    project_id,
    function(err, response, resbody) {
      console.log("Got token", resbody);
      if (!err && resbody.user) {
         const tdclient = new RolloutClient(
          {
            projectId: project_id,
            token: resbody.token
          });
          tdclient.openNow(function(is_open) {
            res.json({
              success: true,
              isOpen: is_open
            });
          });
      }
      else {
        res.send({success: false, err: err});
      }
    }
  );
})

app.post('/fireevent', (req, res) => {
    console.log("/fireevent");
    const project_id = req.body.project_id;
    const event = req.body.event;
    
    RolloutClient.anonymousAuthentication(
      project_id,
      function(err, response, resbody) {
        console.log("Got token", resbody);
        if (!err && resbody.user) {
           const tdclient = new RolloutClient(
            {
              projectId: project_id,
              token: resbody.token
            });
            // const event = {
            //     name: "faqbot.answer_not_found",
            //     attributes: {
            //         bot: {
            //             _id: bot_id,
            //             name: bot_name
            //         },
            //         message: {
            //             text: "help"
            //         }
            //     }
            // };
            tdclient.fireEvent(event, function(err, response, resbody) {
              res.json(resbody);
            });
        }
        else {
          res.send({success: false, err: err});
        }
      }
    );
  })

app.listen(3000, () => {
  console.log('server started');
});