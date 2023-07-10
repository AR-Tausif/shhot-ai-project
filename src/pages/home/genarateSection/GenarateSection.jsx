import { useState } from "react";
import SearchInput from "../../../components/inputs/SearchInput";
import Button from "../../../components/shared/button/Button";
import { surpriseMePrompts } from "../../../constant/SurpriseMePrompts";

const GenarateSection = () => {
    const [form, setForm] = useState("")
    const [generatePromt, setGeneratePromt] = useState("")
    const handleChange = (e) => {
        const promptsInput = e.target.value;
        setForm(promptsInput)
    }
    const handlePromptButton = () => {
        const randomNumber = Math.floor(Math.random() * surpriseMePrompts.length)
        const promts = surpriseMePrompts[randomNumber]
        setForm(promts)
    }
    const handleGeneratePrompt = () => {
        console.log(form);
        fetch("http://localhost:3500/generate", {
            method: "POST",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify({
                'text': 'A cat sitting on a couch',
                'prompts': [
                    'The cat is wearing a hat',
                    'The cat is sitting in a chair'
                ]
            })
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }

    console.log(generatePromt);

    return (
        <div>
            <div className="">
                <div className="grid grid-cols-6 gap-8">
                    <div className="col-span-4">
                        {/* Searching Image With Input */}
                        <div className=" space-y-5">
                            <SearchInput handleGeneratePrompt={handleGeneratePrompt} form={form} handleChange={handleChange} />
                            <div className="grid grid-rows-3 grid-cols-4 gap-4">
                                <div className="bg-[url('https://cdn-site-assets.veed.io/Warrior_74b85cd1e1/Warrior_74b85cd1e1.webp?width=256&quality=75')] bg-no-repeat bg-center bg-cover">

                                </div>
                                <div className="bg-[url('https://cdn-site-assets.veed.io/Flying_House_134266fc64/Flying_House_134266fc64.webp?width=256&quality=75')] bg-no-repeat bg-center bg-cover">

                                </div>
                                <div className="col-span-2 row-span-2 bg-[url('https://cdn-site-assets.veed.io/Bubble_House_b5c33a3788/Bubble_House_b5c33a3788.webp?updated_at=2022-11-24T06%3A45%3A22.352Z&width=640&quality=75')] bg-no-repeat bg-center bg-cover">
                                </div>
                                <div className="bg-[url('https://cdn-site-assets.veed.io/Experimenting_Panda_9ce57391cb/Experimenting_Panda_9ce57391cb.webp?width=256&quality=75')] bg-no-repeat bg-center bg-cover">

                                </div>
                                <div className="bg-[url('https://cdn-site-assets.veed.io/Flying_House_134266fc64/Flying_House_134266fc64.webp?width=256&quality=75')] bg-no-repeat bg-center bg-cover">
                                    <img src="https://cdn-site-assets.veed.io/Fish_6e8d209905/Fish_6e8d209905.webp?width=256&quality=75" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-2 space-y-6">
                        <div className="p-8 rounded-lg border">
                            <h3 className="text-xl text-gray-500 font-bold">Text to Image</h3>
                            <p>Type a few words to generate original images with our AI!</p>
                            <div onClick={handlePromptButton} className="">
                                <Button title="Surprise me" />
                            </div>
                        </div>
                        <div className="p-8 rounded-lg border">
                            <h3 className="text-xl text-gray-500 font-bold">Image Settings</h3>
                            <p className="text-sm">Type a few words to generate original images with our AI!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GenarateSection;