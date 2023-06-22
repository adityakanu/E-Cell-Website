import '../App.css';
import $ from 'jquery';
export default function Initiative() {

  // (function($) {
  //   $.fn.timeline = function() {
  //     var selectors = {
  //       id: $(this),
  //       item: $(this).find(".timeline-item"),
  //       activeClass: "timeline-item--active",
  //       img: ".timeline__img"
  //     };
  //     selectors.item.eq(0).addClass(selectors.activeClass);
  //     selectors.id.css(
  //       "background-image",
  //       "url(" +
  //         selectors.item
  //           .first()
  //           .find(selectors.img)
  //           .attr("src") +
  //         ")"
  //     );
  //     var itemLength = selectors.item.length;
  //     $(window).scroll(function() {
  //       var max, min;
  //       var pos = $(this).scrollTop();
  //       selectors.item.each(function(i) {
  //         min = $(this).offset().top;
  //         max = $(this).height() + $(this).offset().top;
  //         var that = $(this);
  //         if (i == itemLength - 2 && pos > min + $(this).height() / 2) {
  //           selectors.item.removeClass(selectors.activeClass);
  //           selectors.id.css(
  //             "background-image",
  //             "url(" +
  //               selectors.item
  //                 .last()
  //                 .find(selectors.img)
  //                 .attr("src") +
  //               ")"
  //           );
  //           selectors.item.last().addClass(selectors.activeClass);
  //         } else if (pos <= max - 40 && pos >= min) {
  //           selectors.id.css(
  //             "background-image",
  //             "url(" +
  //               $(this)
  //                 .find(selectors.img)
  //                 .attr("src") +
  //               ")"
  //           );
  //           selectors.item.removeClass(selectors.activeClass);
  //           $(this).addClass(selectors.activeClass);
  //         }
  //       });
  //     });
  //   };
  // })(jQuery);
  
  // $("#timeline-1").timeline();
  


  return (<section id="Initiative">
  
    <div class="timeline-container" id="timeline-1">
  <div class="timeline">
    <div class="timeline-item" data-text="Sept. 2020 - Present">
      <div class="timeline__content"><img class="timeline__img" src="https://fundingsage.com/wp-content/uploads/2017/12/IDEA-Lab-2.jpg"/>
        <h2 class="timeline__content-title">IDEA</h2>
          <p class="timeline__content-desc"><i><b>Public Relations Strategist</b></i><br />Leading P.R. for one of the largest student-run venture accelerators in the world
</p>
      </div>
    </div>
    <div class="timeline-item" data-text="Summer 2020">
      <div class="timeline__content"><img class="timeline__img" src="https://spacenews.com/wp-content/uploads/2018/12/AGO-A1-Building-at-sunrise-20181203-879x485.jpg"/>
        <h2 class="timeline__content-title">The Aerospace Corporation</h2>
          <p class="timeline__content-desc"><i><b>Marketing Communications Intern IV</b></i><br />Analyzed competitors’ social media presence using Python to scrape engagement data from multiple channels. Visualized competitive data in Tableau to identify best practices and inform Aerospace’s 5-year online growth strategy. Built an interactive project tracker in Excel for the Content Strategy team, using a Gantt chart to visualize dependent workstreams.</p>
      </div>
    </div>
    <div class="timeline-item" data-text="Jan. 2020 - Present">
      <div class="timeline__content"><img class="timeline__img" src="https://nicholashirano.com/wp-content/uploads/2020/09/72DPIxHilltopA_Tight_Dusk_8202.jpg"/>
        <h2 class="timeline__content-title">VMware</h2>
          <p class="timeline__content-desc"><i><b>Analyst Relations and Market Intelligence Co-op</b></i><br />Led an ongoing data initiative to synthesize product feedback from hundreds of third-party IT industry analysts from firms such as Gartner and Forrester. Developed a suite of Tableau and R-based natural language processing tools to mine insights from analyst commentary. Defined 6 new metrics to quantify sentiment toward VMware, identify market opportunities and measure the impact of the Analyst Relations program. Collaborated with business unit leaders in leveraging analyst feedback to improve VMware’s product roadmap and strategy. Automated dozens of manual text cleaning and data preparation steps in R, saving hours of monthly update work. Retained part-time after June 2020.</p>
      </div>
    </div>
    <div class="timeline-item" data-text="Sept. 2019 - Dec. 2019">
      <div class="timeline__content"><img class="timeline__img" src="https://static.dezeen.com/uploads/2019/09/pedx-northeastern-university-pedestrian-crossing-payette_dezeen-sq.jpg"/>
        <h2 class="timeline__content-title">The Huntington News</h2>
          <p class="timeline__content-desc"><i><b>Staff Writer</b></i><br />Covered the university adminstration and faculty senate</p>
      </div>
    </div>
          <div class="timeline-item" data-text="Summer 2019">
      <div class="timeline__content"><img class="timeline__img" src="https://media.npr.org/assets/img/2023/01/30/rocket-launch-explosion-8fd552d8386837961077a689d66c74757bbe0e80-s1600-c85.webp"/>
        <h2 class="timeline__content-title">The Aerospace Corporation</h2>
          <p class="timeline__content-desc"><i><b>Marketing Communications Intern III</b></i><br />Translated topics like cybersecurity, atomic physics and nanoengineering into engaging content for non-technical audiences. Developed the first-ever communications plan for Aerospace’s Physical Sciences Lab to support organizational changes in the division. Integrated employee engagement, science storytelling and STEM outreach strategies to promote the lab's technical prowess.
</p>
      </div>
    </div>
    <div class="timeline-item" data-text="Jan. 2019 - Jun. 2019">
      <div class="timeline__content"><img class="timeline__img" src="https://s.wsj.net/public/resources/images/BN-TQ523_31bHc_16H_20170530083914.jpg"/>
        <h2 class="timeline__content-title">Scotiabank</h2>
        <p class="timeline__content-desc"><b><i>Corporate Communications Co-op</i></b><br />Developed a new corporate intranet homepage with a responsive HTML/CSS design and a content-rich interface. Consulted with department heads to understand user requirements and create 12 new intranet sites to drive knowledge sharing and collaboration. Launched and produced a company news series that led to a 20% increase in average weekly intranet visits. Served on the bank’s diversity and inclusion committee and produced communications supporting diversity initiatives.</p>
      </div>
    </div>
    <div class="timeline-item" data-text="Summer 2018">
      <div class="timeline__content"><img class="timeline__img" src="https://cdn.mos.cms.futurecdn.net/4FSYccgfJTfyFahzSV34gA.jpg"/>
        <h2 class="timeline__content-title">The Aerospace Corporation</h2>
          <p class="timeline__content-desc"><i><b>Marketing Communications Intern II</b></i><br />Researched satellite insurance to assess the impact of new technology, interest rates and global risks on insurance supply. Co-authored a white paper forecasting trends in satellite insurance to inform government and commercial space participants on the changing financial environment. Produced a video and web article on a space monitoring tool that helped the technology win an industry innovation award.</p>
      </div>
    </div>
    <div class="timeline-item" data-text="Apr. 2018 - Dec. 2018">
      <div class="timeline__content"><img class="timeline__img" src="https://news.northeastern.edu/wp-content/uploads/2020/03/campus_update_09.jpg"/>
        <h2 class="timeline__content-title">The Huntington News</h2>
          <p class="timeline__content-desc"><i><b>Deputy News Editor</b></i><br />Researched, pitched and edited 60+ stories about campus events, student activism and the university administration. Developed an editorial calendar system to improve the weekly workflow of print and multimedia deliverables. Trained a dozen new writers with minimal journalism background on the basics of reporting and AP Style.
</p>
      </div>
    </div>
  </div>
</div>

  </section>);
}
