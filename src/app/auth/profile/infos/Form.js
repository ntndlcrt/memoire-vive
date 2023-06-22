'use client'

import { useRouter } from 'next/navigation'

export default function Form({ user }) {
    const router = useRouter()

    const updateUserInfos = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)

        const body = {
            name: formData.get('name'),
            gender: formData.get('gender'),
            birthday: formData.get('birthday'),
        }

        const res = await fetch('/api/users', {
            method: 'PUT',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json',
            },
        })

        if (res) {
            router.push('/auth/profile/bio')
        }
    }

    return (
        <form
            onSubmit={updateUserInfos}
            className="flex flex-col items-center w-full"
        >
            <input
                type="text"
                className="w-full rounded-full border-none outline-none px-[2.22vw] py-[1.11vw] bg-[#0A09174D] backdrop-blur-[2rem] mb-[1.11vw] shadow-none"
                placeholder="Full name"
                name="name"
                defaultValue={user.name}
            />
            <input
                type="text"
                className="w-full rounded-full border-none outline-none px-[2.22vw] py-[1.11vw] bg-[#0A09174D] backdrop-blur-[2rem] mb-[1.11vw] shadow-none"
                placeholder="Gender"
                name="gender"
            />
            <input
                type="text"
                className="w-full rounded-full border-none outline-none px-[2.22vw] py-[1.11vw] bg-[#0A09174D] backdrop-blur-[2rem] mb-[2.22vw] shadow-none"
                placeholder="Birthday"
                name="birthday"
            />
            <button type="submit" className="button w-full py-[1.11vw]">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#AFA7FF] to-[#000099]">
                    Sync my memories
                </span>
            </button>
        </form>
    )
}
