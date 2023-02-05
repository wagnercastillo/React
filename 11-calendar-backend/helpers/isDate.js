const moment = require('moment')



const isDate = (value, { req, location, path }) => {

    if( !value ) false;
    
    const fecha = moment(value);

    if( fecha.isValid() ) {
        return true;
    }else {
        return false;
    }


    }



module.exports = {
    isDate
}