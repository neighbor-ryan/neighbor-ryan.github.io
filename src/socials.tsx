import * as Socs from "next-utils/socials"

export const url = "https://neighbor-ryan.org"

export const GitHub: Socs.Social = Socs.GitHub("neighbor-ryan/nj-crashes")
export const Twitter = Socs.Twitter("RunsAsCoded")
export const Instagram = Socs.Instagram("neighbor_ryan")
export const YouTube = Socs.YouTube("@neighborryan")

export const socials = [ GitHub, YouTube, Twitter, Instagram, ]

export function Socials() {
    return (
        <Socs.Socials socials={socials} />
    )
}
