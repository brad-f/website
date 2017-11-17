const React = require('react');
const identity = require('lodash/identity')
const { withTheme } = require('theming');

const Page = require('../Page');
const LeftPanel = require('../LeftPanel');
const RightPanel = require('../RightPanel');

const ScalableImage = require('../ScalableImage');
const Bio = require('../Bio');
const Links = require('../Links');

const meImage = require('../../assets/me.jpg');

const Main = (props) => (
  <div style={ props.theme }>
    <Page>
      <LeftPanel>
        <ScalableImage alt="me" image={meImage} onClick={props.onImageClick} />
      </LeftPanel>
      <RightPanel>
        <Bio />
        <Links />
      </RightPanel>
    </Page>
  </div>
);

module.exports = withTheme(Main);
