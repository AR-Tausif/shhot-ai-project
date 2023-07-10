import Button from "../shared/button/Button";

const SearchInput = ({ handleChange, form, handleGeneratePrompt }) => {
    return (

        <div>
            <div className="relative mt-2 rounded-md shadow-sm">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <span className="text-gray-500 sm:text-sm">/</span>
                </div>
                <input onChange={handleChange} value={form} type="text" name="price" id="price" className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-blue-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Describe your own prompt for generate ai pictures" />
                <div className="absolute inset-y-0 right-0 flex items-center">
                    <label htmlFor="currency" className="sr-only">Genarate Button</label>
                    <div onClick={handleGeneratePrompt} className="border">
                        <Button title="Genarate" />
                    </div>
                </div>
            </div>
        </div>);
};

export default SearchInput;