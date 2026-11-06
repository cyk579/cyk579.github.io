# Yunkang Cheng — Personal Academic Website

Live site: https://cyk579.github.io/

A small, responsive static website. No build step or package installation is required.

## Files
- `index.html`: profile, publications, projects, honors, and service.
- `style.css`: desktop, mobile, accessibility, and print styles.
- `video.js`: preview playback controls and the accessible video dialog.
- `assets/`: optimized photographs and project images, without original image metadata.
- `assets/videos/`: the skating demonstration in browser-compatible WebM (VP9) and MP4 (H.264) formats.
- `Yunkang_Cheng_Academic_CV.pdf`: downloadable CV.

## Update
Edit the HTML and CSS, replace the CV using the same filename, then commit and push to the `main` branch. GitHub Pages serves the repository root. Check the Pages deployment after every update.

The skating demonstration plays inline, muted and looping. Clicking the preview or Demo video opens a larger player with native controls; the MP4 link remains available without JavaScript. Reduced-motion preferences disable autoplay while keeping manual playback available. The two video files are 640 × 360 transcodes of the existing public Roller-Skating `hero_clean.mp4`, preserving its complete sequence and playback speed. The MP4 uses H.264, 4:2:0 pixel format, and fast-start metadata; the WebM also places its seek index before video data. Both files use keyframes no more than two seconds apart to support seeking. The original MPEG-4 Visual encoding did not play in the browser. The Qmini code link points to a fork of its upstream project. No private research repository is linked.

Content and personal media belong to their respective authors. This repository does not grant a license to reuse personal photographs or research media.


## Reference and logo sources

The education and honors rows and contextual links draw on the academic-homepage patterns at https://yks23.github.io/, https://guoweixu.com/, and https://lyy-iiis.github.io/. All biographical content is Yunkang Cheng's own.

- Tsinghua seal: existing Tsinghua logo asset in the Roller-Skating project website.
- Spark Program logo: https://lyy-iiis.github.io/assets/images/spark.png
- RoboCup logo: https://www.robocup.org/ (official logo asset).
- World Humanoid Robot Games emblem: cropped from the emblem on Yunkang Cheng's 2026 competition certificate. The certificate and its personal data are not included in this repository.
- Cyrus Tang Foundation logo and scholarship details: https://www.tangfoundation.org.cn/what-we-do.php?act=moral-education
- Paper metadata verified at https://arxiv.org/abs/2607.10815.
- Booster Robotics name: https://www.booster.tech/. The blue-and-purple logo is the existing `images/booster-icon.svg` asset from Yunkang Cheng's Roller-Skating project website. Internship dates, Booster Lab affiliation, and the motion control algorithm engineering role were supplied by Yunkang Cheng.

Organization marks identify the associated institution, program, or event.


## November 2026 editorial revision

- The Department of Automation emblem is cropped, with its colors and proportions retained, from the department-provided presentation template (the purple emblem in its institutional wordmark). Its design was cross-checked against https://www.au.tsinghua.edu.cn/en/.
- Faculty title and department name: https://www.au.tsinghua.edu.cn/en/info/1081/3286.htm.
- RoboCup league and division names, team spelling, and 2026 championship: https://hsl.robocup.org/robocup-2026/results/.
- `Spark Fellowship` is retained from Tsinghua's Youth League Committee funding-letter template.
- `Student Academic Research Advancement Program` is retained from Article 20 of the university's program implementation rules, revised March 2026. It is not the SRT program.
- Other internal award, club, role, and course names are faithful descriptive English translations where an authoritative English title was not available; they are not claimed as official translations.
- Technical descriptions distinguish simulation evaluation from hardware demonstrations. Local stability refers to the Jacobian of the Poincaré return map at a fixed point.
