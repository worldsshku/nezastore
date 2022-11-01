const fs = require('fs')



/**
 * Add Commands/Response message to database
 * @param {String} msg
 * @param {Sstring} response
 * @param {String} userId
 * @param {Object} data
 * @returns true
 */
const addLogin = (nama, nomer, _data) => {
    const obj = {
        nama: nama,
        nomer: nomer
    }
    _data.push(obj)
    fs.writeFileSync('./database/logins.json', JSON.stringify(_data))

    return true
}


/**
 * Delete commands from database
 * @param {String} command
 * @param {Object} _data
 */
const deleteLogin = (command, _data) => {
    Object.keys(_data).forEach((i) => {
        if (_data[i].nama === command) {
            _data.splice(i, 1)
            fs.writeFileSync('./database/logins.json', JSON.stringify(_data))
        }
    })
    return true
}


/**
 * Check command is available or not
 * @param {String} command
 * @param {Object} _data
 * @returns {Boolean}
 */

const checkLogins = (commands, _data) => {
    let status = false
    Object.keys(_data).forEach((i) => {
        if (_data[i].nomer === commands) {
            status = true
        }
    })

    return status
}



module.exports = {
    addLogin,
    deleteLogin,
    checkLogins
}