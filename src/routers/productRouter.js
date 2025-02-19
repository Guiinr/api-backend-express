import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
    return res.json({
        message: "Resposta do Router /produto/"
    })
})

router.post('/', (req, res) => {
    return res.json({
        message: "Resposta do Post /produto/"
    })
})

router.patch('/', (req, res) => {
    return res.json({
        message: "Resposta do Patch /produto/"
    })
})

router.put('/', (req, res) => {
    return res.json({
        message: "Resposta do Put /produto/"
    })
})

router.delete('/', (req, res) => {
    return res.json({
        message: "Resposta do Delete /produto/"
    })
})

export default router