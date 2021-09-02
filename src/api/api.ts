import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "f499194a-9fc7-4a05-a45f-a1732e1abd57"
    }
});

export const usersAPI = {
    getUsers: (currentPage: number = 10, pageSize: number = 100) => {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    follow(userId: string | number) {
        return instance.post(`follow/` + userId, {}, {})

    }, unFollow(userId: string | number) {
        return instance.delete(`follow/` + userId, {}
        )
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`, {})
    },
    login() {
        return instance.post(`auth/login`, {}, {})
    }
}

export const profileAPI = {
   getUserProfile(userId: string) {
        return instance.get(`profile/` + userId,
        )
    },
    getStatus (userId: string) {
       return instance.get(`profile/status/` + userId,)
    },
    updateStatus (status: string) {
       return instance.put(`profile/status`,{status: status})
    }
}











