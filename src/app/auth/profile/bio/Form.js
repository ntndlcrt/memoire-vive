'use client'

import { useRouter } from 'next/navigation'

export default function Form({ user }) {
    const router = useRouter()

    const updateUserInfos = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)

        const body = {
            bio: formData.get('bio'),
        }

        const res = await fetch('/api/users', {
            method: 'PUT',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json',
            },
        })

        if (res) {
            router.push('/auth/profile/done')
        }
    }

    return (
        <form onSubmit={updateUserInfos} className="w-full">
            <textarea
                rows={5}
                className="outline-none border-b border-[#FFFFFF66] text-[2.22vw] shadow-none bg-transparent w-full resize-none text-center mb-[2.22vw]"
                placeholder="You can write anything"
                name="bio"
            ></textarea>
            <button className="button" type="submit">
                This is who I am
            </button>
        </form>
    )
}
