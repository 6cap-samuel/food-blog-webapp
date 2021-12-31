import { Skeleton } from "@mui/material"
import { styled } from "@mui/system"
import { Fragment } from "react"

const StyledSkeletonLoader = styled(Skeleton)({
    marginBottom: "5px"
})

export enum SkeletonType {
    search = "search",
    post = "post"
}

interface SkeletonProps {
    type : SkeletonType
}

const SkeletonLoader = (props: SkeletonProps) => {
    if (props.type === SkeletonType.post){
        return (
            <Fragment>
                <StyledSkeletonLoader variant="rectangular" width="100%" height={118} />
                <Skeleton width="80%" />
                <StyledSkeletonLoader width="60%" />
                <StyledSkeletonLoader variant="rectangular" height={200} />
            </Fragment>
        )
    } else if (props.type === SkeletonType.search) {
        return (
            <Fragment>
                <StyledSkeletonLoader variant="rectangular" width="100%" height={50} />
            </Fragment>
        )
    } else {
        return (
            <Fragment>
                <StyledSkeletonLoader variant="rectangular" width="100%" height={118} />
            </Fragment>
        )
    }
    
}

export default SkeletonLoader;