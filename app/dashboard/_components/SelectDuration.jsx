import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

function SelectDuration({onUserSelect}) {
    return (

        <div className="mt-7">
            <h2>Duration</h2>
            <Select onValueChange={(value) => {
                
                if (value !== 'Custom Prompt') {
                    onUserSelect('duration', value);
                }
            }}>
                <SelectTrigger className="w-full mt-2 p-4 text-md">
                    <SelectValue placeholder="Select Duration" />
                </SelectTrigger>
                <SelectContent>
                   
                        <SelectItem value='30 Seconds'>30 Seconds</SelectItem>
                        <SelectItem value='60 Seconds'>60 Seconds</SelectItem>
                </SelectContent>
            </Select>
        </div>
    )
}

export default SelectDuration