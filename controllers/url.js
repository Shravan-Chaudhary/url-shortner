const shortid = require('shortid')
const URL = require('../models/url.js')

const handleGenerateNewShortURL = async (req, res) => {
  const body = req.body

  if (!body.url) return res.status(400).json({ error: 'ulr is required' })

  const shortID = shortid.generate()

  const result = await URL.create({
    shortId: shortID,
    redirectURL: body.url,
    visitHistory: [],
  })

  return res.status(200).json({ shortenedUrl: shortID })
}

// const handleRedirect = async (req, res) => {
//   const shortId = req.params.shortId

//   const entry = await URL.findOneAndUpdate(
//     {
//       shortId,
//     },
//     {
//       $push: {
//         visitHistory: Date.now(),
//       },
//     },
//   )

//   res.redirect(entry.redirectURL)
// }

module.exports = {
  handleGenerateNewShortURL,
  // handleRedirect,
}
