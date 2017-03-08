$(document).ready(function () {

  $(".toggle-menu").on("click", event => {
    $("#menu").toggleClass("is-open");
  });

  $('#thisarea').keypress(event => {
    if (event.keyCode == 13) {
      $('#thisbutton').click();
    }
  });

  $('form').on('submit', event => {
    event.preventDefault();
    let inputText = $('#thisarea').val();
    callAPI(inputText);
    $('#successful').append("Success!").fadeIn(500, () => {
      $(this).delay(4000).fadeOut(500);
    });

    $('#successful').html('<img src="images/icon1.png"><img src="images/icon1.png"><img src="images/icon1.png"><img src="images/icon1.png">');
  });

  $('#clearjq').on('click', event => {
    $('#toneresults').html('');
    $('#suggestions').html('');
    $('#socialtoneresults').html('');
    $('#socialsuggestions').html('');
    $('#angerID').html('');
    $('#fearID').html('');
    $('#disgustID').html('');
    $('#sadnessID').html('');
    $('#joyID').html('');
    $('#opennessID').html('');
    $('#conscientiousnessID').html('');
    $('#agreeablenessID').html('');
    $('#extraversionID').html('');
  });

  function callAPI(inputText) {
    $.get(`https://newproxywhodis.herokuapp.com/?version=2016-05-19&text=${inputText}`, result => {
      console.log("NEW PROXY WHO DIS");
      apiInfo(result);
    });
  }

  function apiInfo(result) {
    let angerObjectScore = result.document_tone.tone_categories[0].tones[0].score.toFixed();
    let angerObjectName = result.document_tone.tone_categories[0].tones[0].tone_name;
    let disgustObjectScore = result.document_tone.tone_categories[0].tones[1].score.toFixed();
    let disgustObjectName = result.document_tone.tone_categories[0].tones[1].tone_name;
    let fearObjectScore = result.document_tone.tone_categories[0].tones[2].score.toFixed();
    let fearObjectName = result.document_tone.tone_categories[0].tones[2].tone_name;
    let joyObjectScore = result.document_tone.tone_categories[0].tones[3].score.toFixed();
    let joyObjectName = result.document_tone.tone_categories[0].tones[3].tone_name;
    let sadnessObjectScore = result.document_tone.tone_categories[0].tones[4].score.toFixed();
    let sadnessObjectName = result.document_tone.tone_categories[0].tones[4].tone_name;

    let opennessObjectScore = result.document_tone.tone_categories[2].tones[0].score.toFixed();
    let opennessObjectName = result.document_tone.tone_categories[2].tones[0].tone_name;
    let conscientiousnessObjectScore = result.document_tone.tone_categories[2].tones[1].score.toFixed();
    let conscientiousnessObjectName = result.document_tone.tone_categories[2].tones[1].tone_name;
    let extraversionObjectScore = result.document_tone.tone_categories[2].tones[2].score.toFixed();
    let extraversionObjectName = result.document_tone.tone_categories[2].tones[2].tone_name;
    let agreeablenessObjectScore = result.document_tone.tone_categories[2].tones[3].score.toFixed();
    let agreeablenessObjectName = result.document_tone.tone_categories[2].tones[3].tone_name;

    let scoreEmotionArray = [angerObjectScore, disgustObjectScore, fearObjectScore, joyObjectScore, sadnessObjectScore];

    let scoreSocialArray = [opennessObjectScore, conscientiousnessObjectScore, extraversionObjectScore, agreeablenessObjectScore];
  }

  function appendTone(result) {
    $('#toneresults').append(new Option(angerScore(angerObjectScore)));
    $('#toneresults').append(new Option(disgustScore(disgustObjectScore)));
    $('#toneresults').append(new Option(fearScore(fearObjectScore)));
    $('#toneresults').append(new Option(joyScore(joyObjectScore)));
    $('#toneresults').append(new Option(sadnessScore(sadnessObjectScore)));
  }

  function appendSocialTone(result) {
    $('#socialtoneresults').append(new Option(opennessScore(opennessObjectScore)));
    $('#socialtoneresults').append(new Option(conscientiousnessScore(conscientiousnessObjectScore)));
    $('#socialtoneresults').append(new Option(extraversionScore(extraversionObjectScore)));
    $('#socialtoneresults').append(new Option(agreeablenessScore(agreeablenessObjectScore)));
  }

  function angerScore(angerObjectScore) {
    if (angerObjectScore < .5) {
      let angerReturn = "anger score is low";
    } else if (angerObjectScore < .6 && angerObjectScore > .4) {
      let angerReturn = "anger score is medium";
    } else {
      let angerReturn = "anger score is high";
    }
    let returnThis = angerReturn;
    return `Your ${ returnThis }.`;
  }

  function disgustScore(disgustObjectScore) {
    if (disgustObjectScore < .5) {
      let disgustReturn = "disgust score is low";
    } else if (disgustObjectScore < .6 && disgustObjectScore > .4) {
      let disgustReturn = "disgust score is medium";
    } else {
      let disgustReturn = "disgust score is high";
    }
    let returnThis = disgustReturn;
    return `Your ${ returnThis }.`;
  }

  function fearScore(fearObjectScore) {
    if (fearObjectScore < .5) {
      let fearReturn = "fear score is low";
    } else if (fearObjectScore < .6 && fearObjectScore > .4) {
      let fearReturn = "fear score is medium";
    } else {
      let fearReturn = "fear score is high";
    }
    let returnThis = fearReturn;
    return `Your ${ returnThis }.`;
  }

  function joyScore(joyObjectScore) {
    if (joyObjectScore < .5) {
      let joyReturn = "joy score is low";
    } else if (joyObjectScore < .6 && joyObjectScore > .4) {
      let joyReturn = "joy score is medium";
    } else {
      let joyReturn = "joy score is high";
    }
    let returnThis = joyReturn;
    return `Your ${ returnThis }.`;
  }

  function sadnessScore(sadnessObjectScore) {
    if (sadnessObjectScore < .5) {
      let sadnessReturn = "sadness score is low";
    } else if (sadnessObjectScore < .6 && sadnessObjectScore > .4) {
      let sadnessReturn = "sadness score is medium";
    } else {
      let sadnessReturn = "sadness score is high";
    }
    let returnThis = sadnessReturn;
    return `Your ${ returnThis }.`;
  }

  function opennessScore(opennessObjectScore) {
    if (opennessObjectScore < .5) {
      let opennessReturn = "openness score is low";
    } else if (opennessObjectScore < .6 && opennessObjectScore > .4) {
      let opennessReturn = "openness score is medium";
    } else {
      let opennessReturn = "openness score is high";
    }
    let returnThis = opennessReturn;
    return `Your ${ returnThis }.`;
  }

  function conscientiousnessScore(conscientiousnessObjectScore) {
    if (conscientiousnessObjectScore < .5) {
      let conscientiousnessReturn = "conscientiousness score is low";
    } else if (conscientiousnessObjectScore < .6 && conscientiousnessObjectScore > .4) {
      let conscientiousnessReturn = "conscientiousness score is medium";
    } else {
      let conscientiousnessReturn = "conscientiousness score is high";
    }
    let returnThis = conscientiousnessReturn;
    return `Your ${ returnThis }.`;
  }

  function extraversionScore(extraversionObjectScore) {
    if (extraversionObjectScore < .5) {
      let extraversionReturn = "extraversion score is low";
    } else if (extraversionObjectScore < .6 && extraversionObjectScore > .4) {
      let extraversionReturn = "extraversion score is medium";
    } else {
      let extraversionReturn = "extraversion score is high";
    }
    let returnThis = extraversionReturn;
    return `Your ${ returnThis }.`;
  }

  function agreeablenessScore(agreeablenessObjectScore) {
    console.log(agreeablenessObjectScore);
    if (agreeablenessObjectScore < .5) {
      let agreeablenessReturn = "agreeableness score is low";
    } else if (agreeablenessObjectScore < .6 && agreeablenessObjectScore > .4) {
      let agreeablenessReturn = "agreeableness score is medium";
    } else if (agreeablenessObjectScore > .5) {
      let agreeablenessReturn = "agreeableness score is high";
    }
    let returnThis = agreeablenessReturn;
    return `Your ${ returnThis }.`;
  }

  function appendPercent(scoreEmotionArray) {
    let angerPercent = angerObjectScore * 100 + "%";
    let disgustPercent = disgustObjectScore * 100 + "%";
    let fearPercent = fearObjectScore * 100 + "%";
    let joyPercent = joyObjectScore * 100 + "%";
    let sadnessPercent = sadnessObjectScore * 100 + "%";
    $('#angerID').append(angerPercent);
    $('#disgustID').append(disgustPercent);
    $('#fearID').append(fearPercent);
    $('#joyID').append(joyPercent);
    $('#sadnessID').append(sadnessPercent);
    $('#angerBar').css('width', "" + angerPercent + "");
    $('#disgustBar').css('width', "" + disgustPercent + "");
    $('#fearBar').css('width', "" + fearPercent + "");
    $('#joyBar').css('width', "" + joyPercent + "");
    $('#sadnessBar').css('width', "" + sadnessPercent + "");
  }

  function appendSocialPercent(scoreSocialArray) {
    let opennessPercent = opennessObjectScore * 100 + "%";
    let conscientiousnessPercent = conscientiousnessObjectScore * 100 + "%";
    let extraversionPercent = extraversionObjectScore * 100 + "%";
    let agreeablenessPercent = agreeablenessObjectScore * 100 + "%";
    $('#opennessID').append(opennessPercent);
    $('#conscientiousnessID').append(conscientiousnessPercent);
    $('#extraversionID').append(extraversionPercent);
    $('#agreeablenessID').append(agreeablenessPercent);
    $('#opennessBar').css('width', "" + opennessPercent + "");
    $('#conscientiousnessBar').css('width', "" + conscientiousnessPercent + "");
    $('#extraversionBar').css('width', "" + extraversionPercent + "");
    $('#agreeablenessBar').css('width', "" + agreeablenessPercent + "");
  }

  function highestScore(scoreEmotionArray) {
    let max = scoreEmotionArray[0];
    let maxIndex = 0;
    for (let i = 0; i < scoreEmotionArray.length; i++) {
      if (scoreEmotionArray[i] > max) {
        maxIndex = i;
        max = scoreEmotionArray[i];
      }
    }

    if (maxIndex === 0) {
      $('#suggestions').append(new Option("Your text scored highest in Anger."));
      $('#suggestions').append(new Option("If this is the tone you are aiming for, keep up the good work."));
      $('#suggestions').append(new Option("If it is not the tone you are aiming for, consider rephrasing your text using words with happy,"));
      $('#suggestions').append(new Option("sad, fearful, or disgustful connotations."));
    } else if (maxIndex === 1) {
      $('#suggestions').append(new Option("Your text scored highest in Disgust."));
      $('#suggestions').append(new Option("If this is the tone you are aiming for, great job!"));
      $('#suggestions').append(new Option("If it is not the tone you are aiming for, consider rephrasing your text using words with happy,"));
      $('#suggestions').append(new Option("sad, fearful, or angry connotations."));
    } else if (maxIndex === 2) {
      $('#suggestions').append(new Option("Your text scored highest in Fear."));
      $('#suggestions').append(new Option("If this is the tone you are aiming for, keep it up."));
      $('#suggestions').append(new Option("If it is not the tone you are aiming for, consider rephrasing your text using words with happy,"));
      $('#suggestions').append(new Option("sad, disgustful, or angry connotations."));
    } else if (maxIndex === 3) {
      $('#suggestions').append(new Option("Your text scored highest in Joy."));
      $('#suggestions').append(new Option("If this is the tone you are aiming for, keep up the great work."));
      $('#suggestions').append(new Option("If it is not the tone you are aiming for, consider rephrasing your text using words with sad,"));
      $('#suggestions').append(new Option("disgustful, fearful, or angry connotations."));
    } else if (maxIndex === 4) {
      $('#suggestions').append(new Option("Your text scored highest in Sadness."));
      $('#suggestions').append(new Option("If this is the tone you are aiming for, you're on the right path."));
      $('#suggestions').append(new Option("If it is not the tone you are aiming for, consider rephrasing your text using words with happy,"));
      $('#suggestions').append(new Option("disgustful, fearful, or angry connotations."));
    } else {
      $('#suggestions').append(new Option("Your text scores are even. Try adding more text next time."));
    }
  }

  function highestSocialScore(scoreSocialArray) {
    let max = scoreSocialArray[0];
    let maxIndex = 0;
    for (let i = 0; i < scoreSocialArray.length; i++) {
      if (scoreSocialArray[i] > max) {
        maxIndex = i;
        max = scoreSocialArray[i];
      }

      if (maxIndex === 0) {
        $('#socialsuggestions').append(new Option("Your text scored highest in Openness."));
        $('#socialsuggestions').append(new Option("People may respond to you better if you are open."));
      } else if (maxIndex === 1) {
        $('#socialsuggestions').append(new Option("Your text scored highest in conscientiousness."));
        $('#socialsuggestions').append(new Option("Your text likely makes the reader feel more comfortable."));
      } else if (maxIndex === 2) {
        $('#socialsuggestions').append(new Option("Your text scored highest in Extraversion."));
        $('#socialsuggestions').append(new Option("Your text likely makes the reader focus on you. "));
        $('#socialsuggestions').append(new Option("If you would like the reader to focus more on themselves, change the wording."));
      } else if (maxIndex === 3) {
        $('#socialsuggestions').append(new Option("Your text scored highest in Agreeableness."));
        $('#socialsuggestions').append(new Option("The reader may find your text easy to relate to."));
      } else {
        $('#suggestions').append(new Option("Your text scores are even. Try adding more text next time."));
      }
    }
  }
  appendTone(result);
  appendSocialTone(result);
  angerScore(angerObjectScore);
  disgustScore(disgustObjectScore);
  fearScore(fearObjectScore);
  joyScore(joyObjectScore);
  sadnessScore(sadnessObjectScore);
  appendPercent(scoreEmotionArray);
  appendSocialPercent(scoreEmotionArray);
  highestScore(scoreEmotionArray);
  highestSocialScore(scoreSocialArray);
});
