"use client"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

function SelectTopic({onUserSelect}) {
    const options = ['Custom Prompt', 'Random AI Story', 'Scary Story', 'Bed time Story', 'Historical Facts', 'Motivational Story', 'Fun Facts'];

    const [selectedOption, setSelectedOption] = useState();
    return (
        <div>
            <div>
                <h2>Select Video Topic</h2>
                <Select onValueChange={(value) => {
                    setSelectedOption(value);
                    if (value !== 'Custom Prompt') {
                        onUserSelect('topic', value);
                    }
                }}>
                    <SelectTrigger className="w-full mt-2 p-4 text-md">
                        <SelectValue placeholder="Content Type" />
                    </SelectTrigger>
                    <SelectContent>
                        {options.map((item, index) => (
                            <SelectItem value={item}>{item}</SelectItem>
                        ))}
                    </SelectContent>
                </Select>
                {selectedOption === 'Custom Prompt' && (
                    <Textarea
                        className="w-full mt-2 p-4 text-md"
                        onChange={(e) => onUserSelect('topic', e.target.value)}
                        placeholder="Write your prompt here to generate video"
                    />
                )}
            </div>
        </div>
    )
}

export default SelectTopic