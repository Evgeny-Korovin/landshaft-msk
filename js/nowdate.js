'use strict';
      let elem = document.querySelector('#nowdate'),
          date = new Date(),
          nowdate = 'на ' + (date.getDate() > 9 ? date.getDate() : '0' + date.getDate())  + '.' + (date.getMonth() > 9 ? date.getMonth() : '0' + date.getMonth()) + '.' + date.getFullYear();
          elem.innerHTML = nowdate;