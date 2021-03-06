import React from 'react';
import styled from 'styled-components';

const All = styled.div`
  margin: 40px auto;
  max-width: 650px;
  line-height: 1.6;
  font-size: 18px;
  color: #444;
  padding: 0 10px;
  text-align: center;
`;

const Link = styled.a`
  color: #0074d9;
`;

const Ul = styled.ul`
  width: 200px;
  width: fit-content;
`;

const Table = styled.table`
  overflow: auto;
  border-spacing: 0;
  margin: auto;
`;

const Th = styled.th`
  padding: 6px 13px;
  border: 0.5px solid #dfe2e5;
`;

const Td = styled.td`
  padding: 6px 13px;
  border: 0.5px solid #dfe2e5;
  text-align: left;
`;

export default () => (
  <All>
    <h1>Trailblazers</h1>
    <h3>Trello Links</h3>
    <Ul>
      <li>
        <Link href="https://trello.com/b/SpVbh6CM/front-end-capstone-sprint-0-%F0%9F%9A%80-24-10-18-25-10-18">
          Daniel's Trello
        </Link>
      </li>
      <li>
        <Link href="https://trello.com/b/EM0oiVjr/front-end-capstone">
          Drew's Trello
        </Link>
      </li>
      <li>
        <Link href="https://trello.com/b/4WxKFdva/front-end-capstone">
          Lindsey's Trello
        </Link>
      </li>
      <li>
        <Link href="https://trello.com/b/X2oZhIcG/front-end-capstone">
          Spencer's Trello
        </Link>
      </li>
    </Ul>

    <h3>
      <Link href="https://zoom.us/j/7052581097">Zoom Link</Link>
    </h3>

    <h3>
      <Link href="https://drive.google.com/drive/folders/1-0-p02Qz_8RlHhyNtw6ddy9dXY1sK6wz">
        Google Drive
      </Link>
    </h3>

    <h3>Current PR Pairs</h3>
    <p>Daniel ⟷ Drew</p>
    <p>Lindsey ⟷ Spencer</p>

    <h3>Upcoming</h3>
    <Table>
      <tbody>
        <tr>
          <Th>Next meeting</Th>
          <Td>Tuesday @10:30am (right after live lecture)</Td>
        </tr>
        <tr>
          <Th>Next deadline</Th>
          <Td>
            Wednesday @11:59
            <br />
            Link to GitHub PR
          </Td>
        </tr>
      </tbody>
    </Table>
  </All>
);
