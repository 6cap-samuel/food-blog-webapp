import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { Fragment, useContext } from 'react';
import { PostContext } from '../../../contexts/post_context';
import { FilteredPostResult } from '../../../hooks/ui/usePosts';
import SkeletonLoader, { SkeletonType } from '../../skeleton_loader';

const PostTags = () => {
    const { hashtagApiListing, setHashtags }
        = useContext<FilteredPostResult>(PostContext)

    if (hashtagApiListing.isSuccess) {
        const hashTagsList: string[] =
            hashtagApiListing.data.data.hashtags.map((a) => a.name)
        return (
            <Autocomplete
                multiple
                limitTags={8}
                id="tags-outlined"
                options={hashTagsList}
                onChange={(event, value) => setHashtags(value)}
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
    } else if (hashtagApiListing.isLoading) {
        return (
            <SkeletonLoader
                type={SkeletonType.search}
            />
        )
    } else {
        return <Fragment />
    }
}

export default PostTags;