$(document).ready(function() {

      $(".toggle-menu").on("click", function(event) {
        $("#menu").toggleClass("is-open")
      })

      $('#thisarea').keypress(function(event) {
        if (event.keyCode == 13) {
          $('#thisbutton').click()
        }
      });

      $('form').on('submit', function(event) {
        event.preventDefault()
        var inputText = $('#thisarea').val()
        callAPI(inputText)
        $('#successful').append("Success!").fadeIn(500, function() {
          $(this).delay(4000).fadeOut(500)
        })
        $('#successful').html('<img src="images/icon1.png"><img src="images/icon1.png"><img src="images/icon1.png"><img src="images/icon1.png">')
      })

      $('#clearjq').on('click', function(event) {
        $('#toneresults').html('')
        $('#suggestions').html('')
        $('#socialtoneresults').html('')
        $('#socialsuggestions').html('')
        $('#angerID').html('')
        $('#fearID').html('')
        $('#disgustID').html('')
        $('#sadnessID').html('')
        $('#joyID').html('')
        $('#opennessID').html('')
        $('#conscientiousnessID').html('')
        $('#agreeablenessID').html('')
        $('#extraversionID').html('')

      })

      function callAPI(inputText) {
        $.get(`https://newproxywhodis.herokuapp.com/?text=${ inputText }`, result => {
          console.log("NEW PROXY WHO DIS");
          apiInfo(result);
        });
        // $.get(`http://localhost:3000/?text=${ inputText }`, result => {
        //   console.log("NEW PROXY WHO DIS");
        //   apiInfo(result);
        // });
      }

      function apiInfo(result) {
        var angerObjectScore = result.document_tone.tone_categories[0].tones[0].score.toFixed()
        var angerObjectName = result.document_tone.tone_categories[0].tones[0].tone_name
        var disgustObjectScore = result.document_tone.tone_categories[0].tones[1].score.toFixed()
        var disgustObjectName = result.document_tone.tone_categories[0].tones[1].tone_name
        var fearObjectScore = result.document_tone.tone_categories[0].tones[2].score.toFixed()
        var fearObjectName = result.document_tone.tone_categories[0].tones[2].tone_name
        var joyObjectScore = result.document_tone.tone_categories[0].tones[3].score.toFixed()
        var joyObjectName = result.document_tone.tone_categories[0].tones[3].tone_name
        var sadnessObjectScore = result.document_tone.tone_categories[0].tones[4].score.toFixed()
        var sadnessObjectName = result.document_tone.tone_categories[0].tones[4].tone_name

        var opennessObjectScore = result.document_tone.tone_categories[2].tones[0].score.toFixed()
        var opennessObjectName = result.document_tone.tone_categories[2].tones[0].tone_name
        var conscientiousnessObjectScore = result.document_tone.tone_categories[2].tones[1].score.toFixed()
        var conscientiousnessObjectName = result.document_tone.tone_categories[2].tones[1].tone_name
        var extraversionObjectScore = result.document_tone.tone_categories[2].tones[2].score.toFixed()
        var extraversionObjectName = result.document_tone.tone_categories[2].tones[2].tone_name
        var agreeablenessObjectScore = result.document_tone.tone_categories[2].tones[3].score.toFixed()
        var agreeablenessObjectName = result.document_tone.tone_categories[2].tones[3].tone_name

        var scoreEmotionArray = [angerObjectScore, disgustObjectScore, fearObjectScore, joyObjectScore, sadnessObjectScore]

        var scoreSocialArray = [opennessObjectScore, conscientiousnessObjectScore, extraversionObjectScore, agreeablenessObjectScore]

        function appendTone(result) {
          $('#toneresults').append(new Option(angerScore(angerObjectScore)))
          $('#toneresults').append(new Option(disgustScore(disgustObjectScore)))
          $('#toneresults').append(new Option(fearScore(fearObjectScore)))
          $('#toneresults').append(new Option(joyScore(joyObjectScore)))
          $('#toneresults').append(new Option(sadnessScore(sadnessObjectScore)))
        }

        function appendSocialTone(result) {
          $('#socialtoneresults').append(new Option(opennessScore(opennessObjectScore)))
          $('#socialtoneresults').append(new Option(conscientiousnessScore(conscientiousnessObjectScore)))
          $('#socialtoneresults').append(new Option(extraversionScore(extraversionObjectScore)))
          $('#socialtoneresults').append(new Option(agreeablenessScore(agreeablenessObjectScore)))
        }

        function angerScore(angerObjectScore) {
          if (angerObjectScore < .5) {
            var angerReturn = "anger score is low"
          } else if (angerObjectScore < .6 && angerObjectScore > .4) {
            var angerReturn = "anger score is medium"
          } else {
            var angerReturn = "anger score is high"
          }
          var returnThis = angerReturn
          return "Your " + returnThis + "."
        }

        function disgustScore(disgustObjectScore) {
          if (disgustObjectScore < .5) {
            var disgustReturn = "disgust score is low"
          } else if (disgustObjectScore < .6 && disgustObjectScore > .4) {
            var disgustReturn = "disgust score is medium"
          } else {
            var disgustReturn = "disgust score is high"
          }
          var returnThis = disgustReturn
          return "Your " + returnThis + "."
        }

        function fearScore(fearObjectScore) {
          if (fearObjectScore < .5) {
            var fearReturn = "fear score is low"
          } else if (fearObjectScore < .6 && fearObjectScore > .4) {
            var fearReturn = "fear score is medium"
          } else {
            var fearReturn = "fear score is high"
          }
          var returnThis = fearReturn
          return "Your " + returnThis + "."
        }

        function joyScore(joyObjectScore) {
          if (joyObjectScore < .5) {
            var joyReturn = "joy score is low"
          } else if (joyObjectScore < .6 && joyObjectScore > .4) {
            var joyReturn = "joy score is medium"
          } else {
            var joyReturn = "joy score is high"
          }
          var returnThis = joyReturn
          return "Your " + returnThis + "."
        }

        function sadnessScore(sadnessObjectScore) {
          if (sadnessObjectScore < .5) {
            var sadnessReturn = "sadness score is low"
          } else if (sadnessObjectScore < .6 && sadnessObjectScore > .4) {
            var sadnessReturn = "sadness score is medium"
          } else {
            var sadnessReturn = "sadness score is high"
          }
          var returnThis = sadnessReturn
          return "Your " + returnThis + "."
        }

        function opennessScore(opennessObjectScore) {
          if (opennessObjectScore < .5) {
            var opennessReturn = "openness score is low"
          } else if (opennessObjectScore < .6 && opennessObjectScore > .4) {
            var opennessReturn = "openness score is medium"
          } else {
            var opennessReturn = "openness score is high"
          }
          var returnThis = opennessReturn
          return "Your " + returnThis + "."
        }

        function conscientiousnessScore(conscientiousnessObjectScore) {
          if (conscientiousnessObjectScore < .5) {
            var conscientiousnessReturn = "conscientiousness score is low"
          } else if (conscientiousnessObjectScore < .6 && conscientiousnessObjectScore > .4) {
            var conscientiousnessReturn = "conscientiousness score is medium"
          } else {
            var conscientiousnessReturn = "conscientiousness score is high"
          }
          var returnThis = conscientiousnessReturn
          return "Your " + returnThis + "."
        }

        function extraversionScore(extraversionObjectScore) {
          if (extraversionObjectScore < .5) {
            var extraversionReturn = "extraversion score is low"
          } else if (extraversionObjectScore < .6 && extraversionObjectScore > .4) {
            var extraversionReturn = "extraversion score is medium"
          } else {
            var extraversionReturn = "extraversion score is high"
          }
          var returnThis = extraversionReturn
          return "Your " + returnThis + "."
        }

        function agreeablenessScore(agreeablenessObjectScore) {
          console.log(agreeablenessObjectScore)
          if (agreeablenessObjectScore < .5) {
            var agreeablenessReturn = "agreeableness score is low"
          } else if (agreeablenessObjectScore < .6 && agreeablenessObjectScore > .4) {
            var agreeablenessReturn = "agreeableness score is medium"
          } else if (agreeablenessObjectScore > .5) {
            var agreeablenessReturn = "agreeableness score is high"

          }
          var returnThis = agreeablenessReturn
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
          $('#fearBar').css('width', "" + fearPercent + "")
          $('#joyBar').css('width', "" + joyPercent + "")
          $('#sadnessBar').css('width', "" + sadnessPercent + "")
        }

        function appendSocialPercent(scoreSocialArray) {
          var opennessPercent = opennessObjectScore * 100 + "%"
          var conscientiousnessPercent = conscientiousnessObjectScore * 100 + "%"
          var extraversionPercent = extraversionObjectScore * 100 + "%"
          var agreeablenessPercent = agreeablenessObjectScore * 100 + "%"
          $('#opennessID').append(opennessPercent)
          $('#conscientiousnessID').append(conscientiousnessPercent)
          $('#extraversionID').append(extraversionPercent)
          $('#agreeablenessID').append(agreeablenessPercent)
          $('#opennessBar').css('width', "" + opennessPercent + "")
          $('#conscientiousnessBar').css('width', "" + conscientiousnessPercent + "")
          $('#extraversionBar').css('width', "" + extraversionPercent + "")
          $('#agreeablenessBar').css('width', "" + agreeablenessPercent + "")

        }

        function highestScore(scoreEmotionArray) {
          var max = scoreEmotionArray[0]
          var maxIndex = 0
          for (var i = 0; i < scoreEmotionArray.length; i++) {
            if (scoreEmotionArray[i] > max) {
              maxIndex = i
              max = scoreEmotionArray[i]
            }
          }
          if (maxIndex === 0) {
            $('#suggestions').append(new Option("Your text scored highest in Anger."))
            $('#suggestions').append(new Option("If this is the tone you are aiming for, keep up the good work."))
            $('#suggestions').append(new Option("If it is not the tone you are aiming for, consider rephrasing your text using words with happy,"))
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
          }
        }

        function highestSocialScore(scoreSocialArray) {
          var max = scoreSocialArray[0]
          var maxIndex = 0
          for (var i = 0; i < scoreSocialArray.length; i++) {
            if (scoreSocialArray[i] > max) {
              maxIndex = i
              max = scoreSocialArray[i]
            }
          }
          if (maxIndex === 0) {
            $('#socialsuggestions').append(new Option("Your text scored highest in Openness."))
            $('#socialsuggestions').append(new Option("People may respond to you better if you are open."))
          } else if (maxIndex === 1) {
            $('#socialsuggestions').append(new Option("Your text scored highest in conscientiousness."))
            $('#socialsuggestions').append(new Option("Your text likely makes the reader feel more comfortable."))
          } else if (maxIndex === 2) {
            $('#socialsuggestions').append(new Option("Your text scored highest in Extraversion."))
            $('#socialsuggestions').append(new Option("Your text likely makes the reader focus on you. "))
            $('#socialsuggestions').append(new Option("If you would like the reader to focus more on themselves, change the wording."))
          } else if (maxIndex === 3) {
            $('#socialsuggestions').append(new Option("Your text scored highest in Agreeableness."))
            $('#socialsuggestions').append(new Option("The reader may find your text easy to relate to."))
          } else {
            $('#suggestions').append(new Option("Your text scores are even. Try adding more text next time."))
          }
        }

        appendTone(result)
        appendSocialTone(result)
        angerScore(angerObjectScore)
        disgustScore(disgustObjectScore)
        fearScore(fearObjectScore)
        joyScore(joyObjectScore)
        sadnessScore(sadnessObjectScore)
        appendPercent(scoreEmotionArray)
        appendSocialPercent(scoreEmotionArray)
        highestScore(scoreEmotionArray)
        highestSocialScore(scoreSocialArray)
      }

})
