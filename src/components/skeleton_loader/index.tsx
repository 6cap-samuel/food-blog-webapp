import { Skeleton } from "@mui/material"
import { styled } from "@mui/system"
import { Fragment } from "react"

const StyledSkeletonLoader = styled(Skeleton)({
    marginBottom: "5px"
})

const SkeletonLoader = () => {
    return (
        <Fragment>
            <StyledSkeletonLoader variant="rectangular" width="100%" height={50} />
            <StyledSkeletonLoader variant="rectangular" width="100%" height={118} />
            <Skeleton width="80%" />
            <StyledSkeletonLoader width="60%" />
            <StyledSkeletonLoader variant="rectangular" height={200} />
        </Fragment>
    )
}

export default SkeletonLoader;