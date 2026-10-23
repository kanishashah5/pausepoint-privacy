# PausePoint Privacy Policy

Effective date: October 23, 2026.

This policy covers the PausePoint Chrome extension maintained through the [PausePoint privacy project](https://github.com/kanishashah5/pausepoint-privacy).

## What PausePoint does

PausePoint helps you manage your own website time in a Chrome profile. You select domains, active-use allowances, continuous-away reset thresholds and block durations. You may pause, reset, unlock or remove your own rules.

## Data processed locally

PausePoint processes limited **web browsing activity** (website domains and temporary navigation URLs) and **user activity** (active viewing time, tab selection, window focus, page visibility, and idle/locked status) to calculate allowances, recognize continuous absences, and enforce timed blocks. Processing this information locally is still data handling, even though it is not sent to the developer.

PausePoint stores website rule domains, subdomain preferences, durations, enabled/countdown preferences, accumulated usage, departure/checkpoint timestamps, and block expiry timestamps in `chrome.storage.local`. These remain in your Chrome profile and are not synchronized through `chrome.storage.sync`.

To enforce rules, the extension checks selected-tab hostnames, window focus/minimization, idle/locked state, and visibility heartbeats from permitted websites. It temporarily handles matching tab URLs to redirect open tabs and provide a safe return from the local break page. A return URL may be present in the break page's fragment and Chrome's own local tab/session records; it is not retained as a browsing log in PausePoint storage. Chrome itself has independent history, session and permission behavior outside PausePoint's control.

## What is not collected or transmitted

PausePoint has no backend, account system, remote management or cross-device synchronization. It does not transmit configured domains, timing state or browsing activity to its developers or other third parties. There are no analytics, telemetry, advertisements, external tracking, remotely hosted scripts or fonts. It does not inspect email/page content, take screenshots, collect keystrokes, or persist full URL browsing history. Visiting a website still makes the ordinary requests from your browser to that website, governed by that site's policies.

The Chrome Web Store and Chrome itself may process installation, update and browser data under their own policies. Those services are not a PausePoint product backend.

## Permissions and control

Website access is optional and requested for domains you configure. It is used for activity heartbeats, matching and navigation redirects. If you decline or revoke access, the rule says **Permission required** and cannot be enforced. Idle access is used to stop charging idle/locked time. Incognito is unsupported.

Open settings and choose **Clear local data** to remove PausePoint rules, timing state, blocking rules, alarms, script registrations and optional host grants. Removing the extension or its stored profile data also removes its configuration. Clear local data does not erase Chrome's own browsing history, open tab history or other browser records. There is no server copy, cloud backup or recovery service provided by PausePoint.

Saved configuration and timing state remain until you change or clear them, remove the extension, or remove the relevant Chrome profile data. Timing state is updated or reset as your rules run. PausePoint does not add its own encryption to Chrome's local extension storage; access depends on your device and Chrome profile security.

## Limited use and sharing

PausePoint uses information obtained through Chrome APIs only to provide its website-time management features, in accordance with the Chrome Web Store User Data Policy, including its Limited Use requirements. It does not sell data, transfer it to advertising or analytics services, use it for creditworthiness or lending decisions, or allow developers to remotely read your locally stored rules or activity.

## Contact and policy hosting

For privacy questions, contact the maintainer through the [PausePoint issue tracker](https://github.com/kanishashah5/pausepoint-privacy/issues). Issues are public: do not post passwords, private browsing URLs, or other sensitive information. If you voluntarily submit a support request, the information you include becomes available to GitHub and the project maintainers under GitHub's own policies. Visiting this policy on GitHub is also subject to GitHub's privacy practices; the extension itself does not send your activity to GitHub.

## Limitations and changes

Anyone controlling their Chrome profile can change, disable or uninstall the extension. Other profiles, browsers, devices and phone apps are unaffected. Clock adjustments and browser/OS scheduling can affect timing. Future changes to data practices must be reflected in this policy and the store disclosures before release.

Changes to this policy will be published on this page with an updated effective date.
