$(document).ready(function() {

  $('#thisbutton').on('click', function(event) {
    event.preventDefault()
    var inputText = $('#thisarea')
    callAPI(inputText)
  })

  function callAPI(inputText) {
    $.ajax({
      url: 'https://galvanize-cors-proxy.herokuapp.com/https://gateway.watsonplatform.net/tone-analyzer/api/v3/tone?version=2016-05-19&text= + "inputText"',
      type: 'GET',
      headers: {
        Authorization: "Basic ZTU4NTk3YTItNjFiZC00NDNkLWE1MTgtNWU0ZTQ0ZmY1Njg3OkFvRFNvZVpRcXkweg=="
      },
      success: function(results) {
        console.log(results)
      }
    })
  }
  appendTone(results)

})

function appendTone(results) {
  $('#toneresults').append(new Option(returnedObject.document_tone.tone_categories.tone_id))
  console.log(returnedObject.document_tone.tone_categories.tone_id)
}

var returnedObject = {
  "document_tone": {
    "tone_categories": [{
      "tones": [{
        "score": 0.169545,
        "tone_id": "anger",
        "tone_name": "Anger"
      }, {
        "score": 0.075066,
        "tone_id": "disgust",
        "tone_name": "Disgust"
      }, {
        "score": 0.368113,
        "tone_id": "fear",
        "tone_name": "Fear"
      }, {
        "score": 0.035558,
        "tone_id": "joy",
        "tone_name": "Joy"
      }, {
        "score": 0.435377,
        "tone_id": "sadness",
        "tone_name": "Sadness"
      }],
      "category_id": "emotion_tone",
      "category_name": "Emotion Tone"
    }, {
      "tones": [{
        "score": 0.0,
        "tone_id": "analytical",
        "tone_name": "Analytical"
      }, {
        "score": 0.0,
        "tone_id": "confident",
        "tone_name": "Confident"
      }, {
        "score": 0.0,
        "tone_id": "tentative",
        "tone_name": "Tentative"
      }],
      "category_id": "language_tone",
      "category_name": "Language Tone"
    }, {
      "tones": [{
        "score": 0.305357,
        "tone_id": "openness_big5",
        "tone_name": "Openness"
      }, {
        "score": 0.258655,
        "tone_id": "conscientiousness_big5",
        "tone_name": "Conscientiousness"
      }, {
        "score": 0.432689,
        "tone_id": "extraversion_big5",
        "tone_name": "Extraversion"
      }, {
        "score": 0.4955,
        "tone_id": "agreeableness_big5",
        "tone_name": "Agreeableness"
      }, {
        "score": 0.508661,
        "tone_id": "emotional_range_big5",
        "tone_name": "Emotional Range"
      }],
      "category_id": "social_tone",
      "category_name": "Social Tone"
    }]
  }
}
