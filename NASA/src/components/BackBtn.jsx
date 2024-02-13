import { Button } from "@material-tailwind/react";

function BackBtn() {
    return (
        <div className="mx-auto flex justify-end mb-6">
            <Button variant="outlined" className="flex p-3 rounded-full items-center gap-3 border-gray-900 bg-gray-900 border-2 text-slate-50 hover:hue-rotate-90" type="button">
               

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
                </svg>


            </Button>
        </div>
    )
}

export default BackBtn