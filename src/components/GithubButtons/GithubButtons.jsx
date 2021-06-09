import React from 'react';
import GitHubButton from 'react-github-btn';

const GithubButton = () => (
  <>
    <GitHubButton
      className="github-button"
      href="https://github.com/Ezinnem/portfolio"
      data-icon="octicon-repo-forked"
      data-size="large"
      data-show-count="true"
      aria-label="https://github.com/Ezinnem/portfolio"
    >
      Fork
    </GitHubButton>
    <GitHubButton
      className="github-button"
      href="https://github.com/Ezinnem/portfolio"
      data-icon="octicon-star"
      data-size="large"
      data-show-count="true"
      aria-label="https://github.com/Ezinnem/portfolio"
    >
      Star
    </GitHubButton>
  </>
);

export default GithubButton;
