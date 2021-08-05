import "./App.scss";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div>
      <div>
        <Header/>
        <Sidebar/>
        
        <div class="content">
          <p id="model">MODULE 4 Preserve Humanity Relationships</p>
          <h4 id="text-IS">Is the learning organization telefragile?</h4>
          <p id="comment">0 comment</p>
          <p id="paragraph">
            According to Peter Senge, professor at MIT and specialist in
            organizations, a learning company is a human organization that
            implements a set of practices and arrangements to stay in tune with
            its ecosystem. In the learning enterprise, all members learn from
            each other. This is what ensures the sustainable development of the
            organization.
          </p>
          <p id="line4">
            The good news is that it's not a matter of proximity or distance.
          </p>
          <p id="text-IS">The pillars of the learning organization</p>
          <p id="kays">
            There are 5 key activities to develop an organization or a learning
            team:
          </p>
          <ol type="1">
            <li>
              <p id="one">Group problem solving;</p>
            </li>
            <li>
              <p>
                Experimentation and innovation: launching a project, carrying
                out a pilot experience, testing new things, etc. ;{" "}
              </p>
            </li>
            <li>
              <p>
                Exploitation of experiences, that is to say taking the time to
                take stock of both successes and failures and to implement
                actions;{" "}
              </p>
            </li>
            <li>
              <p>
                Learning with others: colleagues, customers, partners,
                suppliers…;
              </p>
            </li>
            <li>
              <p>
                Knowledge transfer: that is, ensuring access to useful knowledge
                for all those who need it;
              </p>
            </li>
          </ol>
          <p id="paragraph">
            These activities are telefragile, and your role is to deploy or
            preserve, despite the distance, a learning spirit in your team ...
            if you want it to remain efficient, autonomous and stimulated by new
            learning!
          </p>
          <p id="text-IS">Your priority 1: strengthen the capacity to adapt</p>
          <p id="paragraph">
            The most effective strategy in an uncertain world is not to plan
            everything, because it is impossible. It is to strengthen the team's
            capacity to adapt, to evolve, to innovate, to improve the game as
            the unforeseen arise.
          </p>
          <p id="paragraph">
            Like the groups that intervene in uncertain situations
            (firefighters, Raid, Samu ...), you will invest time to ritualize
            moments of continuous improvement in which the team arises and takes
            stock of the past period. REX (feedback), retrospectives… They have
            several names and take several forms.
          </p>
          <p id="paragraph">
            A team that resists uncertainties and knows how to adapt is better
            able to know how to react from a distance without constantly
            depending on you, who will not always be reachable or at their
            disposal.
          </p>
          <div class="center-content">
            <div class="text-in-div">
              <p id="text-in-div">
                Our advice: the more the situation is unstable, uncertain,
                shifting, the more regularly you must invest time to stabilize
                the team.
              </p>
            </div>
          </div>
          <p id="text-IS">Your priority 2: develop a learning culture </p>
          <p id="paragraph">
            As Philippe Carré, a specialist in apprenticeship, puts it so well:
            “you always learn alone, but never without others!”.
          </p>
          <p id="paragraph">
            He refers here to the social dimension of learning: what we learn at
            the coffee machine, by observing and copying others, by the advice
            of those around us, etc.
          </p>
          <p id="paragraph">
            However, at a distance, there is a risk that it will stop.
            Capitalizing on experience is important, but putting in place a
            system and actions so that your team continues to update and develop
            its skills is just as important.
          </p>
          <p id="text-IS">For people in post:</p>
          <ul>
            <li>
              <p id="one">
                Capitalize, formalize and make available useful information;
              </p>
            </li>
            <li>
              <p>
                Organize meetings to analyze and share practices so that
                experiences and lessons become collective;
              </p>
            </li>
            <li>
              <p>
                Assign employees to train and support their colleagues on a
                skill, a tool, a process;
              </p>
            </li>
            <li>
              <p>
                Report specific training needs related to distance (mastering a
                tool, organizing your time by teleworking,leading a video
                meeting, etc.)
              </p>
            </li>
          </ul>
          <p id="text-IS">For new entrants or beginners:</p>
          <p id="paragraph">
            From a distance, it is more difficult for new entrants to be
            integrated and become competent and autonomous quickly. It is
            therefore necessary to manage integration courses for which you will
            delegate most of the tasks, in 3 areas:
          </p>
          <ul>
            <li>
              <p id="one">
                The context: profile of the organization and the team ( Market,
                Hierarchy, Clan or Adhocracy), history, key activities, players,
                competitors, customers, developments ...
              </p>
            </li>
            <li>
              <p>
                The team: missions, purpose, colleagues, written and unwritten
                rules ...
              </p>
            </li>
            <li>
              <p>
                The position and the mission: skills, tasks to be carried out,
                tools, process….
              </p>
            </li>
          </ul>
          <p id="paragraph">
            As we have seen previously, it is therefore thanks to the time that
            you will free up for all this that your team will (re) become a
            learner in a distance context. Impossible to count on the shares
            launched out loud in the open space! 😉
          </p>
          <p id="text-IS">For further</p>
          <p id="papertext">
            <i class="bi bi-link-45deg" id="paperclip"></i>
            What is the learning organization?
          </p>
          <p>Item</p>
          <div class="comment-box">
            <p id="fount-text">You found this content:</p>
            <div class="radio-button">
              <div>
                <input type="radio" id="very-clear" />
                <label>👍Very Clear</label>
              </div>
              <div>
                <input type="radio" id="very-clear" />
                <label>🤔Too Burry</label>
              </div>
              <div>
                <input type="radio" id="very-clear" />
                <label>🥺Too Short</label>
              </div>
              <div>
                <input type="radio" id="very-clear" />
                <label>⌛Too Long</label>
              </div>
            </div>
            <div class="comment-text">
              <div class="can-you-text">
                <p>CAN YOU TELL US MORE ?</p>
              </div>
              <textarea
                rows="8"
                cols="50"
                name="comment"
                id="text-area"
                form="usrform"
              />
              <input
                type="submit"
                value="Send my review"
                name="Send my review"
                id="submit-button"
              />
            </div>
          </div>
          <div class="article-action">
            <div class="pre">
              <i class="bi bi-chevron-left"></i>
              <p>Previous</p>
            </div>
            <div class="next">
              <p>Next</p>
              <i class="bi bi-chevron-right"></i>
            </div>
          </div>
          <p id="text-IS">Post a Comment on this course</p>
          <div class="post-comment-box">
            <div class="post-comment-icon">
              <h1>B</h1>
              <i class="bi bi-link-45deg"></i>
              <div class="Attach-file">                
                <p><i class="bi bi-paperclip"></i> Attach a file</p>
              </div>
              <div class="vl"></div>
            </div>

            <div class="comment-profile">
              <span class="ABicon">
                <p>AB</p>
              </span>
              <p class="AB">Alex Bold</p>
            </div>
            <div class="comment-checkbox">
              <input type="checkbox" name="" />
              <label>Post My Comment Autometicilly</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
