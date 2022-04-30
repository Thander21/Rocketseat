const res = require("express/lib/response")
const Database = require("../db/config")

module.exports = {
    async create(req, res){
        const db = await Database()
        const pass = req.body.password
        let roomId
        let isRoom = true

        while (isRoom) {

            //Gera numero aleatorio de 6 digitos para a sala
            for(var i = 0;  i < 6; i++){
                i ==  0 ? roomId = Math.floor(Math.random() * 10).toString() : 
                roomId += Math.floor(Math.random() * 10).toString()
            }

            //veriifcar se o numero da sala ja ésites.
            const roomsExistIds = await db.all(`SELECT id FROM rooms`)
            isRoom = roomsExistIds.some(roomExistId => roomExistId === roomId)

            if(!isRoom){

                //Insere a sala criada no banco
                await db.run(`INSERT INTO rooms (id, pass) VALUES(${parseInt(roomId)}, ${pass})`)
            }
            
        }

        db.close()
        res.redirect(`/room/${roomId}`)
    },

    async open(req, res){
        const db = await Database()
        const roomId = req.params.room
        const questions = await db.all(`SELECT * FROM questions WHERE room = ${roomId} AND read = 0`)
        const questionsRead = await db.all(`SELECT * FROM questions WHERE room = ${roomId} AND read = 1`)

        res.render("room", {roomId: roomId, questions: questions, questionsRead: questionsRead})
        
    },

    enter(req, res){
        const roomId = req.body.roomId
    
        res.redirect(`/room/${roomId}`)
    
    }
}

