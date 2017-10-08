const React = require('react');

const Page = require('../Page');
const LeftPanel = require('../LeftPanel');
const RightPanel = require('../RightPanel');

const ScalableImage = require('../ScalableImage');
const Bio = require('../Bio');
const Links = require('../Links');

const meImage = require('../../assets/me.jpg');

module.exports = () => (
  <Page>
    <LeftPanel>
      <ScalableImage alt="me" image={meImage} />
    </LeftPanel>
    <RightPanel>
      <Bio />
      <Links />
    </RightPanel>
  </Page>
);
