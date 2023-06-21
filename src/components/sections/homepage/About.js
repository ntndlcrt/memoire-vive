import Image from 'next/image'

export default function About() {
    return (
        <section className="h-screen">
            <div className="row grid grid-cols-2 gap-[1.67vw]">
                <div className="bg-[#0A0917B3] backdrop-blur-[2rem] rounded-[0.5vw] p-[2.22vw] pb-[29.3vw] flex flex-col relative overflow-hidden">
                    <span className="text-[2.22vw] text-[#AFA7FF] mb-[1.11vw]">
                        Capture Precious Stories
                    </span>
                    <p>
                        Lorem ipsum dolor sit amet consectetur. Ut volutpat
                        sollicitudin etiam parturient eleifend mattis id sapien.
                    </p>
                    <div className="absolute w-[100%] h-[31.25vw] right-0 bottom-0">
                        <Image
                            src="/images/pictures/polaroids.webp"
                            alt=""
                            fill={true}
                        />
                    </div>
                </div>
                <div className="bg-[#0A0917B3] backdrop-blur-[2rem] rounded-[0.5vw] p-[2.22vw] pb-[29.3vw] flex flex-col relative overflow-hidden">
                    <span className="text-[2.22vw] text-[#AFA7FF] mb-[1.11vw]">
                        Build Interactive Memories
                    </span>
                    <p>
                        Lorem ipsum dolor sit amet consectetur. Ut volutpat
                        sollicitudin etiam parturient eleifend mattis id sapien.
                    </p>
                </div>
            </div>
        </section>
    )
}
