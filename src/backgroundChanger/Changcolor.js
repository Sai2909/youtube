import React, { useState } from 'react'

const Changcolor = () => {
    const [color, setColor] = useState('white')
    return (
        <div className="w-full h-screen duration-200"
            style={{ backgroundColor: color }}>
            <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-3 ">
                <div className="flex flex-wrap justify-center gap-3 px-3 py-2 shadow-lg bg-gray-300 rounded-2xl">
                    <button
                        className="btn-primary"
                        style={{ backgroundColor: "red" }}
                        onClick={() => setColor("red")}
                    >
                        Red
                    </button>
                    <button
                        className="btn-primary"
                        style={{ backgroundColor: "green" }}
                        onClick={() => setColor("green")}
                    >
                        Green
                    </button>
                    <button
                        className="btn-primary"
                        style={{ backgroundColor: "Blue" }}
                        onClick={() => setColor("blue")}
                    >
                        Blue
                    </button>
                    <button
                        className="btn-primary"
                        style={{ backgroundColor: "Olive" }}
                        onClick={() => setColor("olive")}
                    >
                        Olive
                    </button>
                    <button
                        className="btn-primary text-black"
                        style={{ backgroundColor: "white" }}
                        onClick={() => setColor("white")}
                    >
                        White
                    </button>
                    <button
                        className="btn-primary"
                        style={{ backgroundColor: "Gray" }}
                        onClick={() => setColor("gray")}
                    >
                        Gray
                    </button>
                    <button
                        className="btn-primary text-black"
                        style={{ backgroundColor: "Yellow" }}
                        onClick={() => setColor("yellow")}
                    >
                        Yellow
                    </button>
                    <button
                        className="btn-primary text-black"
                        style={{ backgroundColor: "Pink" }}
                        onClick={() => setColor("pink")}
                    >
                        Pink
                    </button>
                    <button
                        className="btn-primary"
                        style={{ backgroundColor: "Purple" }}
                        onClick={() => setColor("purple")}
                    >
                        Purple
                    </button>
                    <button
                        className="btn-primary text-black"
                        style={{ backgroundColor: "Lavender" }}
                        onClick={() => setColor("lavender")}
                    >
                        Lavender
                    </button>
                    <button
                        className="btn-primary"
                        style={{ backgroundColor: "Black" }}
                        onClick={() => setColor("black")}
                    >
                        Black
                    </button>
                </div>

            </div>

        </div>
    )
}

export default Changcolor
