import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

import { email, githubicon, linkedinicon } from "../assets";

//template_igyg67w
//service_px0s50i
// arO2QxJL_WSZ3k583
const Contact = () => {
    const formRef = useRef();
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { target } = e;
        const { name, value } = target;

        setForm({
            ...form,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs
            .send(
                "service_px0s50i",
                "template_igyg67w",
                {
                    from_name: form.name,
                    to_name: "Shubham",
                    from_email: form.email,
                    to_email: "shubhamcu27@gmail.com",
                    message: form.message,
                },
                "arO2QxJL_WSZ3k583"
            )
            .then(
                () => {
                    setLoading(false);
                    alert(
                        "Thank you. I will get back to you as soon as possible."
                    );

                    setForm({
                        name: "",
                        email: "",
                        message: "",
                    });
                },
                (error) => {
                    setLoading(false);
                    console.error(error);

                    alert("Something went wrong. Please try again.");
                }
            );
    };

    return (
        <div
            className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
        >
            <motion.div
                variants={slideIn("left", "tween", 0.2, 1)}
                className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
            >
                <p className={styles.sectionSubText}>Get in touch</p>
                <h3 className={styles.sectionHeadText}>Contact.</h3>

                <a href="mailto:shubhamcu27@gmail.com" className="">
                    <img
                        className="w-6 h-6 inline-block align-middle mr-2"
                        src={email}
                        alt="email"
                    />
                    <span className="inline-block align-middle">
                        shubhamcu27@gmail.com
                    </span>
                </a>
                <div className="flex mt-2 gap-2">
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://github.com/shubhamsingla27"
                    >
                        <img
                            className="w-6 h-6 inline-block align-middle "
                            src={githubicon}
                            alt="email"
                        />
                    </a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.linkedin.com/in/shubham-singla27/"
                    >
                        <img
                            className="w-6 h-6 inline-block align-middle"
                            src={linkedinicon}
                            alt="email"
                        />
                    </a>
                </div>
                <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className=" mt-6 flex flex-col gap-8"
                >
                    <label className="flex flex-col">
                        <span className="text-white font-medium mb-4">
                            Your Name
                        </span>
                        <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="What's your good name?"
                            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                        />
                    </label>
                    <label className="flex flex-col">
                        <span className="text-white font-medium mb-4">
                            Your email
                        </span>
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="What's your web address?"
                            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                        />
                    </label>
                    <label className="flex flex-col">
                        <span className="text-white font-medium mb-4">
                            Your Message
                        </span>
                        <textarea
                            rows={7}
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            placeholder="What you want to say?"
                            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                        />
                    </label>

                    <button
                        type="submit"
                        className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
                    >
                        {loading ? "Sending..." : "Send"}
                    </button>
                </form>
            </motion.div>

            <>
                <motion.div
                    variants={slideIn("right", "tween", 0.2, 1)}
                    className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px] w-4/5 mx-auto sm:w-auto sm:mx-0"
                >
                    <EarthCanvas />
                </motion.div>
            </>
        </div>
    );
};

export default SectionWrapper(Contact, "contact");
