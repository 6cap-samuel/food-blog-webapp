import Typography from '@mui/material/Typography';

export enum TypographyVariant {
    h1 = "h1",
    h2 = "h2",
    h3 = "h3",
    h4 = "h4",
    h5 = "h5",
    h6 = "h6",
    subtitle1 = "subtitle1",
    subtitle2 = "subtitle2",
    body1 = "body1",
    body2 = "body2",
    button = "button",
    caption = "caption",
    overline = "overline"
}

interface typographyProps {
    variant: TypographyVariant,
    text: string,
}

const Text = (props: typographyProps) => {
    const divContents: TypographyVariant[] =
        [
            TypographyVariant.h1,
            TypographyVariant.h2,
            TypographyVariant.h3,
            TypographyVariant.h4,
            TypographyVariant.h5,
            TypographyVariant.h6,
            TypographyVariant.subtitle1,
            TypographyVariant.subtitle2,
        ]

    const blockContents: TypographyVariant[] = [
        TypographyVariant.button,
        TypographyVariant.caption,
        TypographyVariant.overline,
    ]

    if (divContents.filter((a) => a === props.variant).length != 0) {
        return (
            <Typography variant={props.variant} component="div" gutterBottom>
                {props.text}
            </Typography>
        )
    } else if (blockContents.filter((a) => a === props.variant).length != 0) {
        return (
            <Typography variant={props.variant} display="block" gutterBottom>
                {props.text}
            </Typography>
        )
    } else {
        return (
            <Typography variant={props.variant} gutterBottom>
                {props.text}
            </Typography>
        )
    }
}

export default Text;