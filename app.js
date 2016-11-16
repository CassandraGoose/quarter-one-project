$(document).ready(function() {

  $(".toggle-menu").on("click", function(event) {
    $("#menu").toggleClass("is-open")
  })

  $('#thisbutton').on('click', function(event) {
    event.preventDefault()
    var inputText = $('#thisarea').val()
    callAPI(inputText)
  })

  function callAPI(inputText) {
    $.ajax({
      url: 'https://galvanize-cors.herokuapp.com/https://gateway.watsonplatform.net/tone-analyzer/api/v3/tone?version=2016-05-19&text=' + inputText,
      type: 'GET',
      headers: {
        "Authorization": "Basic btoae58597a2-61bd-443d-a518-5e4e44ff5687:AoDSoeZQqy0z"
      },
      success: function(results) {
        console.log(results)
      }
    })
  }
  appendTone(returnedObject)
  highestScore(scoreEmotionArray)
  appendPercent(scoreEmotionArray)
})



var returnedObject = {
  "document_tone": {
    "tone_categories":

      [{
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


function appendTone(returnedObject) {
  $('#toneresults').append(new Option(angerScore(angerObjectScore)))
  $('#toneresults').append(new Option(disgustScore(disgustObjectScore)))
  $('#toneresults').append(new Option(fearScore(fearObjectScore)))
  $('#toneresults').append(new Option(joyScore(joyObjectScore)))
  $('#toneresults').append(new Option(sadnessScore(sadnessObjectScore)))
}

var angerObjectScore = returnedObject.document_tone.tone_categories[0].tones[0].score
var angerObjectName = returnedObject.document_tone.tone_categories[0].tones[0].tone_name
var disgustObjectScore = returnedObject.document_tone.tone_categories[0].tones[1].score
var disgustObjectName = returnedObject.document_tone.tone_categories[0].tones[1].tone_name
var fearObjectScore = returnedObject.document_tone.tone_categories[0].tones[2].score
var fearObjectName = returnedObject.document_tone.tone_categories[0].tones[2].tone_name
var joyObjectScore = returnedObject.document_tone.tone_categories[0].tones[3].score
var joyObjectName = returnedObject.document_tone.tone_categories[0].tones[3].tone_name
var sadnessObjectScore = returnedObject.document_tone.tone_categories[0].tones[4].score
var sadnessObjectName = returnedObject.document_tone.tone_categories[0].tones[4].tone_name

var opennessObjectScore = returnedObject.document_tone.tone_categories[2].tones[0].score
var opennessObjectName = returnedObject.document_tone.tone_categories[2].tones[0].tone_name
var conscientiousnessObjectScore = returnedObject.document_tone.tone_categories[2].tones[1].score
var conscientiousnessObjectName = returnedObject.document_tone.tone_categories[2].tones[1].tone_name
var extraversionObjectScore = returnedObject.document_tone.tone_categories[2].tones[2].score
var extraversionObjectName = returnedObject.document_tone.tone_categories[2].tones[2].tone_name
var agreeablenessObjectScore = returnedObject.document_tone.tone_categories[2].tones[3].score
var agreeablenessObjectName = returnedObject.document_tone.tone_categories[2].tones[3].tone_name


var scoreEmotionArray = [angerObjectScore, disgustObjectScore, fearObjectScore, joyObjectScore, sadnessObjectScore]

var scoreSocialArray = [opennessObjectScore, conscientiousnessObjectScore, extraversionObjectScore, agreeablenessObjectScore]

function angerScore(angerObjectScore) {
  if (angerObjectScore < .5) {
    var angerReturn = "anger score is not high"
  } else if (angerObjectScore >= .5) {
    var angerReturn = "anger score is medium"
  } else {
    var angerReturn = "anger score is high"
  }
  var returnThis = angerReturn
  return "Your " + returnThis + "."
}

function disgustScore(disgustObjectScore) {
  if (disgustObjectScore < .5) {
    var disgustReturn = "disgust score is not high"
  } else if (angerObjectScore >= .5) {
    var disgustReturn = "disgust score is medium"
  } else {
    var disgustReturn = "disgust score is high"
  }
  var returnThis = disgustReturn
  return "Your " + returnThis + "."
}

function fearScore(fearObjectScore) {
  if (fearObjectScore < .5) {
    var fearReturn = "fear score is not high"
  } else if (angerObjectScore >= .5) {
    var fearReturn = "fear score is medium"
  } else {
    var fearReturn = "fear score is high"
  }
  var returnThis = fearReturn
  return "Your " + returnThis + "."
}

function joyScore(joyObjectScore) {
  if (joyObjectScore < .5) {
    var joyReturn = "joy score is not high"
  } else if (angerObjectScore >= .5) {
    var joyReturn = "joy score is medium"
  } else {
    var joyReturn = "joy score is high"
  }
  var returnThis = joyReturn
  return "Your " + returnThis + "."
}

function sadnessScore(sadnessObjectScore) {
  if (sadnessObjectScore < .5) {
    var sadnessReturn = "sadness score is not high"
  } else if (angerObjectScore >= .5) {
    var sadnessReturn = "sadness score is medium"
  } else {
    var sadnessReturn = "sadness score is high"
  }
  var returnThis = sadnessReturn
  return "Your " + returnThis + "."
}

function opennessScore(opennessObjectScore) {
  if (opennessObjectScore < .5) {
    var opennessReturn = "openness score is not high"
  } else if (angerObjectScore >= .5) {
    var opennessReturn = "openness score is medium"
  } else {
    var opennessReturn = "openness score is high"
  }
  var returnThis = opennessReturn
  return "Your " + returnThis + "."
}

function conscientiousnessScore(conscientiousnessObjectScore) {
  if (conscientiousnessObjectScore < .5) {
    var conscientiousnessReturn = "conscientiousness score is not high"
  } else if (angerObjectScore >= .5) {
    var conscientiousnessReturn = "conscientiousness score is medium"
  } else {
    var conscientiousnessReturn = "conscientiousness score is high"
  }
  var returnThis = conscientiousnessReturn
  return "Your " + returnThis + "."
}

function extraversionScore(extraversionObjectScore) {
  if (extraversionObjectScore < .5) {
    var extraversionReturn = "extraversion score is not high"
  } else if (angerObjectScore >= .5) {
    var extraversionReturn = "extraversion score is medium"
  } else {
    var extraversionReturn = "extraversion score is high"
  }
  var returnThis = extraversionReturn
  return "Your " + returnThis + "."
}

function aggreeablenessScore(aggreeablenessObjectScore) {
  if (aggreeablenessObjectScore < .5) {
    var aggreeablenessReturn = "aggreeableness score is not high"
  } else if (angerObjectScore >= .5) {
    var aggreeablenessReturn = "aggreeableness score is medium"
  } else {
    var aggreeablenessReturn = "aggreeableness score is high"
  }
  var returnThis = aggreeablenessReturn
  return "Your " + returnThis + "."
}

function appendPercent(scoreEmotionArray) {
  var angerPercent = angerObjectScore * 100 + "%"
  var disgustPercent = disgustObjectScore * 100 + "%"
  var fearPercent = fearObjectScore * 100 + "%"
  var joyPercent = joyObjectScore * 100 + "%"
  var sadnessPercent = sadnessObjectScore * 100 + "%"
  $('#angerID').append(angerPercent)
  $('#disgustID').append(disgustPercent)
  $('#fearID').append(fearPercent)
  $('#joyID').append(joyPercent)
  $('#sadnessID').append(sadnessPercent)
  $('#angerBar').css('width', "" + angerPercent + "")
  $('#disgustBar').css('width', "" + disgustPercent + "")
  $('#fearBar').css('width', "" + disgustPercent + "")
  $('#joyBar').css('width', "" + joyPercent + "")
  $('#sadnessBar').css('width', "" + sadnessPercent + "")

}





// console.log(extraversionScore(extraversionObjectScore))

function highestScore(scoreEmotionArray) {
  var max = scoreEmotionArray[0]
  var madIndex = 0
  for (var i = 0; i < scoreEmotionArray.length; i++) {
    if (scoreEmotionArray[i] > max) {
      maxIndex = i
      max = scoreEmotionArray[i]
    }
  }
  if (maxIndex === 0) {
    $('#suggestions').append(new Option("Your text scored highest in Anger."))
    $('#suggestions').append(new Option("If this is the tone you are aiming for, keep up the good work."))
    $('#suggestions').append(new Option("If it is not the tone your are aiming for, consider rephrasing your text using words with happy,"))
    $('#suggestions').append(new Option("sad, fearful, or disgustful connotations."))
  } else if (maxIndex === 1) {
    $('#suggestions').append(new Option("Your text scored highest in Disgust."))
    $('#suggestions').append(new Option("If this is the tone you are aiming for, great job!"))
    $('#suggestions').append(new Option("If it is not the tone you are aiming for, consider rephrasing your text using words with happy,"))
    $('#suggestions').append(new Option("sad, fearful, or angry connotations."))
  } else if (maxIndex === 2) {
    $('#suggestions').append(new Option("Your text scored highest in Fear."))
    $('#suggestions').append(new Option("If this is the tone you are aiming for, keep it up."))
    $('#suggestions').append(new Option("If it is not the tone you are aiming for, consider rephrasing your text using words with happy,"))
    $('#suggestions').append(new Option("sad, disgustful, or angry connotations."))
  } else if (maxIndex === 3) {
    $('#suggestions').append(new Option("Your text scored highest in Joy."))
    $('#suggestions').append(new Option("If this is the tone you are aiming for, keep up the great work."))
    $('#suggestions').append(new Option("If it is not the tone you are aiming for, consider rephrasing your text using words with sad,"))
    $('#suggestions').append(new Option("disgustful, fearful, or angry connotations."))
  } else if (maxIndex === 4) {
    $('#suggestions').append(new Option("Your text scored highest in Sadness."))
    $('#suggestions').append(new Option("If this is the tone you are aiming for, you're on the right path."))
    $('#suggestions').append(new Option("If it is not the tone you are aiming for, consider rephrasing your text using words with happy,"))
    $('#suggestions').append(new Option("disgustful, fearful, or angry connotations."))
  } else {
    $('#suggestions').append(new Option("Your text scores are even. Try adding more text next time."))
      // $('option').addClass("textSuggestions")
  }
}
