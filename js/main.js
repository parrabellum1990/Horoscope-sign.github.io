$(document).ready(function () {

  // finding index of a birth day:

  $('#birthDay1').click(function (e) {
    $('#dayStatus').html($('#birthDay1').text());
  });
  $('#birthDay2').click(function (e) {
    $('#dayStatus').html($('#birthDay2').text());
  });
  $('#birthDay3').click(function (e) {
    $('#dayStatus').html($('#birthDay3').text());
  });
  $('#birthDay4').click(function (e) {
    $('#dayStatus').html($('#birthDay4').text());
  });
  $('#birthDay5').click(function (e) {
    $('#dayStatus').html($('#birthDay5').text());
  });
  $('#birthDay6').click(function (e) {
    $('#dayStatus').html($('#birthDay6').text());
  });
  $('#birthDay7').click(function (e) {
    $('#dayStatus').html($('#birthDay7').text());
  });
  $('#birthDay8').click(function (e) {
    $('#dayStatus').html($('#birthDay8').text());
  });
  $('#birthDay9').click(function (e) {
    $('#dayStatus').html($('#birthDay9').text());
  });
  $('#birthDay10').click(function (e) {
    $('#dayStatus').html($('#birthDay10').text());
  });
  $('#birthDay11').click(function (e) {
    $('#dayStatus').html($('#birthDay11').text());
  });
  $('#birthDay12').click(function (e) {
    $('#dayStatus').html($('#birthDay12').text());
  });
  $('#birthDay13').click(function (e) {
    $('#dayStatus').html($('#birthDay13').text());
  });
  $('#birthDay14').click(function (e) {
    $('#dayStatus').html($('#birthDay14').text());
  });
  $('#birthDay15').click(function (e) {
    $('#dayStatus').html($('#birthDay15').text());
  });
  $('#birthDay16').click(function (e) {
    $('#dayStatus').html($('#birthDay16').text());
  });
  $('#birthDay17').click(function (e) {
    $('#dayStatus').html($('#birthDay17').text());
  });
  $('#birthDay18').click(function (e) {
    $('#dayStatus').html($('#birthDay18').text());
  });
  $('#birthDay19').click(function (e) {
    $('#dayStatus').html($('#birthDay19').text());
  });
  $('#birthDay20').click(function (e) {
    $('#dayStatus').html($('#birthDay20').text());
  });
  $('#birthDay21').click(function (e) {
    $('#dayStatus').html($('#birthDay21').text());
  });
  $('#birthDay22').click(function (e) {
    $('#dayStatus').html($('#birthDay22').text());
  });
  $('#birthDay23').click(function (e) {
    $('#dayStatus').html($('#birthDay23').text());
  });
  $('#birthDay24').click(function (e) {
    $('#dayStatus').html($('#birthDay24').text());
  });
  $('#birthDay25').click(function (e) {
    $('#dayStatus').html($('#birthDay25').text());
  });
  $('#birthDay26').click(function (e) {
    $('#dayStatus').html($('#birthDay26').text());
  });
  $('#birthDay27').click(function (e) {
    $('#dayStatus').html($('#birthDay27').text());
  });
  $('#birthDay28').click(function (e) {
    $('#dayStatus').html($('#birthDay28').text());
  });
  $('#birthDay29').click(function (e) {
    $('#dayStatus').html($('#birthDay29').text());
  });
  $('#birthDay30').click(function (e) {
    $('#dayStatus').html($('#birthDay30').text());
  });
  $('#birthDay31').click(function (e) {
    $('#dayStatus').html($('#birthDay31').text());
  });

  // finding index of a month birth:

  $('#January').click(function (e) {
    $('#monthStatus').html($('#January').text());
  });
  $('#February').click(function (e) {
    $('#monthStatus').html($('#February').text());
  });
  $('#March').click(function (e) {
    $('#monthStatus').html($('#March').text());
  });
  $('#April').click(function (e) {
    $('#monthStatus').html($('#April').text());
  });
  $('#May').click(function (e) {
    $('#monthStatus').html($('#May').text());
  });
  $('#June').click(function (e) {
    $('#monthStatus').html($('#June').text());
  });
  $('#July').click(function (e) {
    $('#monthStatus').html($('#July').text());
  });
  $('#August').click(function (e) {
    $('#monthStatus').html($('#August').text());
  });
  $('#September').click(function (e) {
    $('#monthStatus').html($('#September').text());
  });
  $('#October').click(function (e) {
    $('#monthStatus').html($('#October').text());
  });
  $('#November').click(function (e) {
    $('#monthStatus').html($('#November').text());
  });
  $('#December').click(function (e) {
    $('#monthStatus').html($('#December').text());
  });

  // finding your horoscope sign

  $('#getResult').click(function (e) {
    e.preventDefault();
    var birthDay = $('#dayStatus').text();
    var birthMonth = $('#monthStatus').text();
    // Козерог
    if (birthMonth == 'Декабрь' && birthDay > 21 || birthMonth == 'Январь' && birthDay < 20) {
      $('#zodiacSign').text('Козерог');
      $('#zodiacImage').attr('src', 'img/svg/capricorn.svg');
    } else {
      // Водолей
      if (birthMonth == 'Январь' && birthDay > 19 || birthMonth == 'Февраль' && birthDay < 20) {
        $('#zodiacSign').text('Водолей');
        $('#zodiacImage').attr('src', 'img/svg/aquarius.svg');
      } else {
        // Рыбы
        if (birthMonth == 'Февраль' && birthDay > 19 || birthMonth == 'Март' && birthDay <= 20) {
          $('#zodiacSign').text('Рыбы');
            $('#zodiacImage').attr('src', 'img/svg/pisces.svg');
        } else {
          // Овен
          if (birthMonth == 'Март' && birthDay > 20 || birthMonth == 'Апрель' && birthDay < 21) {
            $('#zodiacSign').text('Овен');
              $('#zodiacImage').attr('src', 'img/svg/aries.svg');
          } else {
            // Телец
            if (birthMonth == 'Апрель' && birthDay > 20 || birthMonth == 'Май' && birthDay < 21) {
              $('#zodiacSign').text('Телец');
                $('#zodiacImage').attr('src', 'img/svg/taurus.svg');
            } else {
              // Близнецы
              if (birthMonth == 'Май' && birthDay > 20 || birthMonth == 'Июнь' && birthDay < 21) {
                $('#zodiacSign').text('Близнецы');
                  $('#zodiacImage').attr('src', 'img/svg/gemini.svg');
              } else {
                // Рак
                if (birthMonth == 'Июнь' && birthDay >= 21 || birthMonth == 'Июль' && birthDay <= 22) {
                  $('#zodiacSign').text('Рак');
                    $('#zodiacImage').attr('src', 'img/svg/cancer.svg');
                } else {
                  // Лев
                  if (birthMonth == 'Июль' && birthDay >= 23 || birthMonth == 'Август' && birthDay <= 22) {
                    $('#zodiacSign').text('Лев');
                      $('#zodiacImage').attr('src', 'img/svg/leo.svg');
                  } else {
                    // Дева
                    if (birthMonth == 'Август' && birthDay >= 23 || birthMonth == 'Сентябрь' && birthDay <= 22) {
                      $('#zodiacSign').text('Дева');
                        $('#zodiacImage').attr('src', 'img/svg/virgo.svg');
                    } else {
                      // Весы
                      if (birthMonth == 'Сентябрь' && birthDay >= 23 || birthMonth == 'Октябрь' && birthDay <= 22) {
                        $('#zodiacSign').text('Весы');
                          $('#zodiacImage').attr('src', 'img/svg/libra.svg');
                      } else {
                        // Скорпион
                        if (birthMonth == 'Октябрь' && birthDay >= 23 || birthMonth == 'Ноябрь' && birthDay <= 22) {
                          $('#zodiacSign').text('Скорпион');
                            $('#zodiacImage').attr('src', 'img/svg/scorpio.svg');
                        } else {
                          // Стрелец
                          if (birthMonth == 'Ноябрь' && birthDay >= 23 || birthMonth == 'Декабрь' && birthDay <= 21) {
                            $('#zodiacSign').text('Стрелец');
                              $('#zodiacImage').attr('src', 'img/svg/saggittarius.svg');
                          } else {
                            alert('Вы не ввели месяц либо день вашего рождения! Дождитесь когда "рак" на горе свиснет и повторите попытку!')
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  });
  // clear:
  $('#getClear').click(function (e) { 
    e.preventDefault();
    $('#dayStatus, #monthStatus, #yearStatus, #zodiacSign').text(''),
    $('#zodiacImage').attr('src', 'img/main-img.svg');
  });

});



