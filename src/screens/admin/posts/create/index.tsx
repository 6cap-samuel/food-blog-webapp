import { Button, ButtonGroup, Chip, Container, Divider, Paper, Rating, TextField } from "@mui/material";
import { styled } from "@mui/system";
import { useEffect, useState } from 'react';
import { Img } from "react-progressive-loader";
import Text, { TypographyVariant } from "../../../../components/text";
import { usePostMutation } from "../../../../hooks/api/usePostMutation";
import { useNavigate } from 'react-router-dom'

const StyledTextField = styled(TextField)({
    width: '100%',
    marginBottom: '10px'
})

const StyledDiv = styled('div')({
    width: '100%',
    marginBottom: '10px'
})

const StyledRating = styled('div')({
    width: '150px',
    margin: '0 auto',
    marginTop: '10px'
})

const StyledButton = styled(Button)({
    marginTop: '5px',
    marginBottom: '10px',
    width: '100%'
})

const StyledImg = styled(Img)({
    height: 150,
    marginBottom: '10px'
});

const StyledDivider = styled(Divider)({
    marginTop: '10px',
    marginBottom: '10px'
});

const StyledButtonGroup = styled(ButtonGroup)({
    marginBottom: '10px',
    width: '100%'
})

const StyledPublishButton = styled(StyledButton)({
})

const StyledChip = styled(Chip)({
    marginRight: '5px',
    maxWidth: '100px',
    marginBottom: '5px'
})

const StyledPaper = styled(Paper)({
    padding: '10px',
    marginBottom: '80px'
})

const CreatePostScreen = () => {
    const [lat, setLat] = useState(null);
    const [lng, setLng] = useState(null);
    const [status, setStatus] = useState(null);
    const [headerImageUrl, setHeaderImageUrl]
        = useState<string>("");
    const [storeName, setStoreName]
        = useState<string>("");
    const [storeLocation, setStoreLocation]
        = useState<string>("");
    const [ratings, setRatings]
        = useState<number>(3);
    const [isPublishDisabled, setIsPublishDisabled]
        = useState<boolean>(true)
    const [review, setReview]
        = useState<string>("")
    const [hashtag, setHashtag]
        = useState<string>("")

    const [posReview, setPosReview]
        = useState<string[]>([])
    const [neuReview, setNeuReview]
        = useState<string[]>([])
    const [negReview, setNegReview]
        = useState<string[]>([])

    const [hashtags, setHashtags]
        = useState<string[]>([])

    const postMutationQuery = usePostMutation(
        storeName,
        headerImageUrl + ".png",
        storeLocation,
        lat,
        lng,
        ratings,
        posReview,
        neuReview,
        negReview,
        hashtags,
    )

    const navigate = useNavigate();

    const addReview = (type: string) => {
        if (review === "") return;

        setReview(type)
        if (type === "Positive") {
            posReview.push(review)
        } else if (type === "Neutral") {
            neuReview.push(review)
        } else if (type === "Negative") {
            negReview.push(review)
        }

        setReview("")
    }

    const addHashtag = () => {
        if (hashtag === "") return;
        hashtags.push(hashtag)
        setHashtag("")
    }

    const handleDelete = () => { }

    useEffect(() => {
        if (headerImageUrl !== ""
            && storeName !== ""
            && storeLocation !== ""
        ) {
            setIsPublishDisabled(false)
        } else {
            setIsPublishDisabled(true)
        }
    }, [headerImageUrl, storeName, storeLocation])

    useEffect(() => {
        if (!navigator.geolocation) {
            setStatus('Geolocation is not supported by your browser');
        } else {
            setStatus('Locating...');
            navigator.geolocation.getCurrentPosition((position) => {
                setStatus(null);
                setLat(position.coords.latitude);
                setLng(position.coords.longitude);
            }, () => {
                setStatus('Unable to retrieve your location');
            });
        }
    }, [])

    useEffect(() => {
        postMutationQuery.isSuccess
            && navigate(`/food/${postMutationQuery.data.data.data}`)
    }, [postMutationQuery.isSuccess])

    return <Container>
        <StyledPaper>
            {
                headerImageUrl !== "" && <StyledImg
                    src={headerImageUrl + ".png"}
                    alt={"pho"}
                    loadOnScreen={true}
                />
            }
            <StyledTextField
                required
                size="medium"
                label="Header Image URL"
                value={headerImageUrl}
                onChange={(e) => setHeaderImageUrl(e.target.value)}
            />
            <StyledTextField
                required
                size="medium"
                label="Store Name"
                value={storeName}
                onChange={(e) => setStoreName(e.target.value)}
            />
            <StyledTextField
                required
                size="medium"
                label="Store Location"
                value={storeLocation}
                autoComplete="nope"
                onChange={(e) => setStoreLocation(e.target.value)}
            />
            <StyledDiv>
                <StyledRating>
                    <Rating
                        name="size-large"
                        size="large"
                        value={ratings}
                        onChange={(_, newValue) => setRatings(newValue)}
                    />
                </StyledRating>
            </StyledDiv>
            <StyledDivider />
            <StyledTextField
                size="medium"
                label="Review"
                value={review}
                autoComplete="nope"
                onChange={(e) => setReview(e.target.value)}
            />
            <StyledButtonGroup variant="outlined">
                {
                    ["Negative", "Neutral", "Positive"].map(
                        (value) => {
                            return <Button 
                            key={value}
                            onClick={() => addReview(value)}>
                                {value}
                            </Button>
                        })

                }
            </StyledButtonGroup>
            {
                posReview.length !== 0 && <Text
                    variant={TypographyVariant.h6}
                    text={"Positives"}
                />
            }
            {
                posReview.map((review, idx) => {
                    return <StyledChip key={idx} label={review} onDelete={handleDelete} />
                })
            }
            {
                neuReview.length !== 0 && <Text
                    variant={TypographyVariant.h6}
                    text={"Neutrals"}
                />
            }
            {
                neuReview.map((review, idx) => {
                    return <StyledChip key={idx} label={review} onDelete={handleDelete} />
                })
            }
            {
                negReview.length !== 0 && <Text
                    variant={TypographyVariant.h6}
                    text={"Negatives"}
                />
            }
            {
                negReview.map((review, idx) => {
                    return <StyledChip key={idx} label={review} onDelete={handleDelete} />
                })
            }
            <StyledDivider />
            <StyledTextField
                size="medium"
                label="Hashtag"
                value={hashtag}
                autoComplete="nope"
                onChange={(e) => setHashtag(e.target.value)}
            />
            <StyledButton
                variant="outlined"
                color="info"
                onClick={addHashtag}>
                Add Hashtag
            </StyledButton>
            {
                hashtags.map((hashtag, idx) => {
                    return <StyledChip key={idx} label={hashtag} onDelete={handleDelete} />
                })
            }
            <StyledDivider />
            <StyledPublishButton
                disabled={isPublishDisabled}
                variant="outlined"
                color="success"
                onClick={() => postMutationQuery.mutate()}>
                Publish
            </StyledPublishButton>
        </StyledPaper>
    </Container>
}

export default CreatePostScreen;