import {rest} from 'msw'

const baseURL = 'https://mpark-moments-drf-api.herokuapp.com/'

export const handlers = [
    rest.get(`${baseURL}dj-rest-auth/user/`, (req,res,ctx) => {
        return res(ctx.json({
            pk: 7,
            username: "andrew",
            email: "",
            first_name: "",
            last_name: "",
            profile_id: 7,
            profile_image: "https://res.cloudinary.com/mparkcloudinary/image/upload/v1/media/images/IMG_3445_s8crfz"
            }))
    }),
    rest.post(`${baseURL}dj-rest-auth/logout/`, (req,res,ctx) => {
        return res(ctx.status(200))
    })
]