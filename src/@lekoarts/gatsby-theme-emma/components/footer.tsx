/** @jsx jsx */
import { Box, Link, Flex, jsx, useColorMode } from "theme-ui";

const Footer = () => {
  const [colorMode] = useColorMode();
  const isDark = colorMode === `dark`;

  return (
    <Box as="footer" variant="layout.footer">
      Copyright &copy; {new Date().getFullYear()}. All rights reserved.
      <br />
      <Flex
        sx={{
          justifyContent: `center`,
          alignItems: `center`,
          mt: 3,
          color: `text`,
          fontWeight: `semibold`,
          a: { color: `text` },
        }}
      >
        {/* {isDark ? (
          <img
            width="30"
            height="30"
            src="https://img.lekoarts.de/gatsby/logo_v2-light_w30.png"
            alt="LekoArts Logo"
          />
        ) : (
          <img
            width="30"
            height="30"
            src="https://img.lekoarts.de/gatsby/logo_v2_w30.png"
            alt="LekoArts Logo"
          />
        )}
        {` `} */}
        <div sx={{ mx: 1 }}>by</div>
        {` `}
        <Link
          aria-label="Link to the theme author's website"
          href="https://zapy.dev"
        >
          Zapy Dev
        </Link>
      </Flex>
    </Box>
  );
};

export default Footer;
