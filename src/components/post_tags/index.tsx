import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { createFilterOptions } from '@mui/base';

interface PostTagsProps {
    options: string[]    
    setFilters: React.Dispatch<React.SetStateAction<string[]>>
}

const PostTags = (props: PostTagsProps) => {

    return (
        <Autocomplete
            multiple
            limitTags={8}
            id="tags-outlined"
            options={props.options}
            onChange={(event, value) => props.setFilters(value)}
            filterSelectedOptions
            renderInput={(params) => (
                <TextField
                    {...params}
                    label="Search"
                    placeholder="Tags"
                />
            )}
        />
    );
}

export default PostTags;