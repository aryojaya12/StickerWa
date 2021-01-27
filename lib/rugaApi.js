const axios = require('axios')
const link = 'https://arugaz.my.id'
const fileyt = 'https://raw.githubusercontent.com/ArugaZ/scraper-results/main/20201111_230923.jpg'
const eroryt = 'https://raw.githubusercontent.com/ArugaZ/scraper-results/main/20201111_234624.jpg'

const ytmp3 = async (url) => new Promise((resolve, reject) => {
    axios.get(`${link}/api/media/ytaudio?url=${url}`)
    .then((res) => {
		resolve(res.data)
    })
    .catch((err) =>{
        reject(err)
    })
})

const ytmp4 = async (url) => new Promise((resolve, reject) => {
    axios.get(`${link}/api/media/ytvideo?url=${url}`)
    .then((res) => {
		resolve(res.data)
    })
    .catch((err) =>{
        reject(err)
    })
})

const fb = async (url) => new Promise((resolve, reject) => {
	axios.get(`${link}/api/media/facebook?url=${url}`)
	.then((res) => {
		if (res.data.error) resolve({status: 'error', link: res.data.result})
		resolve({linkhd: res.data.result.hd, linksd: res.data.result.sd})
	})
	.catch((err) =>{
        reject(err)
    })
})

const stalkig = async (url) => new Promise((resolve, reject) => {
    axios.get(`${link}/api/media/stalkig?user=${url}`)
    .then((res) => {
		if (res.data.error) resolve(res.data.error)
        const text = `User: ${res.data.Username}\nName: ${res.data.Name}\nBio: ${res.data.Biodata}\nFollowers: ${res.data.Jumlah_Followers}\nFollowing: ${res.data.Jumlah_Following}\nPost: ${res.data.Jumlah_Post}`
        resolve(text)
    })
    .catch((err) =>{
        reject(err)
    })
})

const stalkigpict = async (url) => new Promise((resolve, reject) => {
    axios.get(`${link}/api/media/stalkig?user=${url}`)
    .then((res) => {
		if (res.data.error) resolve('https://c4.wallpaperflare.com/wallpaper/976/117/318/anime-girls-404-not-found-glowing-eyes-girls-frontline-wallpaper-preview.jpg')
        resolve(`${res.data.Profile_pic}`)
    })
    .catch((err) =>{
        reject(err)
    })
})

const quote = async () => new Promise((resolve, reject) => {
    axios.get(`${link}/api/random/text/quotes`)
    .then((res) => {
        const text = `Author: ${res.data.author}\n\nQuote: ${res.data.quotes}`
        resolve(text)
    })
    .catch((err) =>{
        reject(err)
    })
})

const wiki = async (url) => new Promise((resolve, reject) => {
    axios.get(`${link}/api/edu/idwiki?query=${url}`)
    .then((res) => {
        resolve(res.data.result)
    })
    .catch((err) =>{
        reject(err)
    })
})

const daerah = async () => new Promise((resolve, reject) => {
    axios.get(`https://mhankbarbar.herokuapp.com/daerah`)
    .then((res) => {
        resolve(res.data.result)
    })
    .catch((err) =>{
        reject(err)
    })
})

const jadwaldaerah = async (url) => new Promise((resolve, reject) => {
    axios.get(`https://mhankbarbar.tech/api/jadwalshalat?daerah=${daerah}&apiKey=Rk0ZljTfvs2kBB9S3EWL`)
    .then((res) => {
		if (res.data.error) resolve(res.data.error)
        const text = `Jadwal Sholat ${url}\n\nImsyak: ${res.data.Imsyak}\nSubuh: ${res.data.Subuh}\nDzuhur: ${res.data.Dzuhur}\nAshar: ${res.data.Ashar}\nMaghrib: ${res.data.Maghrib}\nIsya: ${res.data.Isya}`
        resolve(text)
    })
    .catch((err) =>{
        reject(err)
    })
})

const cuaca = async (url) => new Promise((resolve, reject) => {
    axios.get(`https://rest.farzain.com/api/cuaca.php?id=${url}&apikey=O8mUD3YrHIy9KM1fMRjamw8eg`)
    .then((res) => {
		if (res.data.respon.cuaca == null) resolve('Maaf daerah kamu tidak tersedia')
        const text = `Cuaca di: ${res.data.respon.tempat}\n\nCuaca: ${res.data.respon.cuaca}\nAngin: ${res.data.respon.angin}\nDesk: ${res.data.respon.deskripsi}\nKelembapan: ${res.data.respon.kelembapan}\nSuhu: ${res.data.respon.suhu}\nUdara: ${res.data.respon.udara}`
        resolve(text)
    })
    .catch((err) =>{
        reject(err)
    })
})

const tulis = async (teks) => new Promise((resolve, reject) => {
    axios.get(`https://mhankbarbar.tech/nulis?text=${nulis}&apiKey=Rk0ZljTfvs2kBB9S3EWL`)
    .then((res) => {
        resolve(`${res.data.result}`)
    })
    .catch((err) => {
        reject(err)
    })
})

const artinama = async (nama) => new Promise((resolve, reject) => {
	axios.get(`${link}/api/primbon/artinama?name=${nama}`)
	.then((res) => {
		resolve(res.data.result)
	})
	.catch((err) => {
		reject(err)
	})
})

const covidindo = async () => new Promise((resolve, reject) => {
	axios.get(`https://api.kawalcorona.com/indonesia/`)
	.then((res) => {
		const textv = `*Data Coronavirus Indonesia*\n\nKasus Baru: ${data_indonesia.kasus_baru}\nTotal Kasus: ${data_indonesia.positif}\nSembuh: ${data_indonesia.sembuh}\nPenanganan: ${data_indonesia.penanganan}\nMeninggal: ${data_indonesia.meninggal}\n\nUpdate: ${data_indonesia.terakhir}`
		resolve(textv)
	})
	.catch((err) => {
		reject(err)
	})
})

const lirik = async (judul) => new Promise((resolve, reject) => {
	axios.get(`${link}/api/lirik?judul=${judul}`)
	.then((res) => {
		resolve(res.data.result)
	})
	.catch((err) => {
		reject(err)
	})
})

const hilihfont = async (kalimat) => new Promise((resolve, reject) => {
	axios.get(`http://enznoire.herokuapp.com/hilih?kata=${kalimat}`)
	.then((res) => {
		resolve(res.data.result)
	})
	.catch((err) => {
		reject(err)
	})
})

const qrcode = async (url, size) => new Promise((resolve, reject) => {
	axios.get(`http://api.qrserver.com/v1/create-qr-code/?data=${url}&size=${size}x${size}`)
		.then((res) => {
			resolve(`http://api.qrserver.com/v1/create-qr-code/?data=${url}&size=${size}x${size}`)
		})
		.catch((err) => {
            reject(err)
        })
})

const qrread = async (url) => new Promise((resolve, reject) => {
	axios.get(`http://api.qrserver.com/v1/read-qr-code/?fileurl=${url}`)
		.then((res) => {
			if (res.data[0].symbol[0].data == null) return resolve(`Link yang anda masukan salah`)
			const textqr = `Hasil : ${res.data[0].symbol[0].data}`
			resolve(textqr)
		})
		.catch((err) => {
            reject(err)
        })
})

module.exports = {
    ytmp3,
    ytmp4,
	fb,
    stalkig,
    stalkigpict,
    quote,
    wiki,
    daerah,
    jadwaldaerah,
    cuaca,
    tulis,
	artinama,
	covidindo,
	lirik,
	hilihfont,
	qrcode,
	qrread
}