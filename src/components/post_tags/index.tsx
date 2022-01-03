import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { useHashtagListing } from '../../hooks/useHashtagListing';
import SkeletonLoader, { SkeletonType } from '../skeleton_loader';

interface PostTagsProps {
    setFilters: React.Dispatch<React.SetStateAction<string[]>>
}

const PostTags = (props: PostTagsProps) => {
    const hashtagListing = useHashtagListing()
    if (hashtagListing.isSuccess) {
        const hashTagsList: string[] =
            hashtagListing.data.data.data.map((a) => a.name)
        return (
            <Autocomplete
                multiple
                limitTags={8}
                id="tags-outlined"
                options={hashTagsList}
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
    } else if (hashtagListing.isLoading){
        return (
            <SkeletonLoader
                type={SkeletonType.search}
            />
        )
    } else {
        return <></>
    }
}

export default PostTags;