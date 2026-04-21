import React from "react";
import {
    FooterButton,
    FooterInfo,
    FooterLink,
    FooterLinks,
    FooterSingIn,
    FooterSingInAsk,
    FooterSingInText,
    FooterStyle,
    FooterText,
    FooterTitle,
} from "./styles";

const Footer = () => {
    return (
        <FooterStyle>
            <FooterInfo>
                <FooterTitle>Thanks for listening. Now join in.</FooterTitle>
                <FooterText>Save tracks, follow artists and build playlists. All for free.</FooterText>
                <FooterButton primary>Create account</FooterButton>
                <FooterSingIn>
                    <FooterSingInAsk>Already have an account?</FooterSingInAsk>
                    <FooterSingInText>Sign in</FooterSingInText>
                </FooterSingIn>
            </FooterInfo>
            <FooterLinks>
                <FooterLink href="https://soundcloud.com/people/directory">Directory · </FooterLink>
                <FooterLink href="https://soundcloud.com/company/home">About us · </FooterLink>
                <FooterLink href="https://soundcloud.com/getstarted/getheard">
                    Artist Resources ·
                </FooterLink>
                <FooterLink href="https://soundcloud.com/company/newsroom">Newsroom · </FooterLink>
                <FooterLink href="https://soundcloud.com/topic/home">Topics · </FooterLink>
                <FooterLink href="https://soundcloud.com/jobs">Jobs · </FooterLink>
                <FooterLink href="https://developers.soundcloud.com/">Developers · </FooterLink>
                <FooterLink href="https://help.soundcloud.com/">Help · </FooterLink>
                <FooterLink href="https://soundcloud.com/terms-of-use">Legal · </FooterLink>
                <FooterLink href="https://soundcloud.com/pages/privacy">Privacy · </FooterLink>
                <FooterLink href="https://soundcloud.com/pages/cookies">Cookie Policy · </FooterLink>
                <FooterLink href="https://soundcloud.com/pages/cookies">Cookie Manager · </FooterLink>
                <FooterLink href="https://soundcloud.com/imprint">Imprint · </FooterLink>
                <FooterLink href="https://soundcloud.com/charts/top">Charts · </FooterLink>
                <FooterLink href="https://soundcloud.com/transparency-reports">
                    Transparency Reports ·{" "}
                </FooterLink>
            </FooterLinks>
        </FooterStyle>
    );
};

export default Footer;
