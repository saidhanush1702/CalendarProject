function checkEnter(event) {
    if (event.key === 'Enter') {
      Calculation();
    }
  }
let Year;

function getYear()
{
    Year=document.querySelector('.year1').value;
    return Year;
}
function nextyear()
{
    Year=document.querySelector('.year1').value;
    Year=document.querySelector('.year1').value=`${String(Number(Year)+1)}`;
    Calculation();
}
function prevyear()
{
    Year=document.querySelector('.year1').value;
    Year=document.querySelector('.year1').value=`${String(Number(Year)-1)}`;
    Calculation();
}

function jan()
{
    let m=`<span class="cmon">JANUARY</span>`;
    return m;

}
function feb()
{
    let m=`<span class="cmon">FEBAURY</span>`;
    return m;
}
function mar()
{
    let m=`<span class="cmon">MARCH</span>`;
    return m;
}
function apr()
{
    let m=`<span class="cmon">APRIL</span>`;
    return m;
}

function may()
{
    let m=`<span class="cmon">MAY</span>`;
    return m;
}
function jun()
{
    let m=`<span class="cmon">JUNE</span>`;
    return m;
}
function jul()
{
    let m=`<span class="cmon">JULY</span>`;
    return m;
}
function aug()
{
    let m=`<span class="cmon">AUG</span>`;
    return m;
   
}
function sep()
{
    let m=`<span class="cmon">SEP</span>`;
    return m;
}
function oct()
{
    let m=`<span class="cmon">OCT</span>`;
    return m;
}
function nov()
{
    let m=`<span class="cmon">NOV</span>`;
    return m;
}
function dec()
{
    let m=`<span class="cmon">DEC</span>`;
    return m;
}

    function day131(check)
    {
        let m;
        if(check ==1)
            m=jan();
        else if(check ==2)
            m=feb();
        else if(check ==3)
            m=mar();
        else if(check ==4)
            m=apr();
        else if(check ==5)
            m=may();
        else if(check ==6)
            m=jun();
        else if(check ==7)
            m=jul();
        else if(check ==8)
            m=aug();
        else if(check ==9)
            m=sep();
        else if(check ==10)
            m=oct();
        else if(check ==11)
            m=nov();
        else
            m=dec();
        let d=`
        <table>
        <tr>
            <th colspan="7">
                ${m}
            </th>
        </tr>
        <tr class ="DayColor">
        <td>SUN</td>
        <td>MON</td>
        <td>TUE</td>
        <td>WED</td>
        <td>THU</td>
        <td>FRI</td>
        <td>SAT</td>
    </tr>
    <tr>
        <td class ="Sun">1</td>
        <td>2</td>
        <td>3</td>
        <td>4</td>
        <td>5</td>
        <td>6</td>
        <td class ="Sat" >7</td>
    </tr>
    <tr>
        <td class ="Sun">8</td>
        <td>9</td>
        <td>10</td>
        <td>11</td>
        <td>12</td>
        <td>13</td>
        <td class ="Sat" >14</td>
    </tr>
    <tr>
        <td class ="Sun">15</td>
        <td>16</td>
        <td>17</td>
        <td>18</td>
        <td>19</td>
        <td>20</td>
        <td class ="Sat" >21</td>
    </tr>
    <tr>
        <td class ="Sun">22</td>
        <td>23</td>
        <td>24</td>
        <td>25</td>
        <td>26</td>
        <td>27</td>
        <td class ="Sat" >28</td>
    </tr>
    <tr>
        <td class ="Sun">29</td>
        <td>30</td>
        <td>31</td>
        <td></td>
        <td></td>
        <td></td>
        <td class ="Sat" ></td>
    </tr>
    <tr class ="emptyrow">
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    </tr>
    </table>`;
    return d;
    }
    function day231(check)
    {
        let m;
        if(check ==1)
            m=jan();
        else if(check ==2)
            m=feb();
        else if(check ==3)
            m=mar();
        else if(check ==4)
            m=apr();
        else if(check ==5)
            m=may();
        else if(check ==6)
            m=jun();
        else if(check ==7)
            m=jul();
        else if(check ==8)
            m=aug();
        else if(check ==9)
            m=sep();
        else if(check ==10)
            m=oct();
        else if(check ==11)
            m=nov();
        else
            m=dec();
        let d=`
        <table>
        <tr>
            <th colspan="7">
                ${m}
            </th>
        </tr>
        <tr class ="DayColor">
        <td>SUN</td>
        <td>MON</td>
        <td>TUE</td>
        <td>WED</td>
        <td>THU</td>
        <td>FRI</td>
        <td>SAT</td>
    </tr>
    <tr>
        <td class ="Sun"></td>
        <td>1</td>
        <td>2</td>
        <td>3</td>
        <td>4</td>
        <td>5</td>
        <td class ="Sat" >6</td>
    </tr>
    <tr>
        <td class ="Sun">7</td>
        <td>8</td>
        <td>9</td>
        <td>10</td>
        <td>11</td>
        <td>12</td>
        <td class ="Sat" >13</td>
    </tr>
    <tr>
        <td class ="Sun">14</td>
        <td>15</td>
        <td>16</td>
        <td>17</td>
        <td>18</td>
        <td>19</td>
        <td class ="Sat" >20</td>
    </tr>
    <tr>
        <td class ="Sun">21</td>
        <td>22</td>
        <td>23</td>
        <td>24</td>
        <td>25</td>
        <td>26</td>
        <td class ="Sat" >27</td>
    </tr>
    <tr>
        <td class ="Sun">28</td>
        <td>29</td>
        <td>30</td>
        <td>31</td>
        <td></td>
        <td></td>
        <td class ="Sat" ></td>
    </tr>
    <tr class ="emptyrow">
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    </tr>
    </table>`;
    return d;
    }


    function day331(check)
    {
        let m;
        if(check ==1)
            m=jan();
        else if(check ==2)
            m=feb();
        else if(check ==3)
            m=mar();
        else if(check ==4)
            m=apr();
        else if(check ==5)
            m=may();
        else if(check ==6)
            m=jun();
        else if(check ==7)
            m=jul();
        else if(check ==8)
            m=aug();
        else if(check ==9)
            m=sep();
        else if(check ==10)
            m=oct();
        else if(check ==11)
            m=nov();
        else
            m=dec();
        let d=`
        <table>
        <tr>
            <th colspan="7">
                ${m}
            </th>
        </tr>
        <tr class ="DayColor">
        <td>SUN</td>
        <td>MON</td>
        <td>TUE</td>
        <td>WED</td>
        <td>THU</td>
        <td>FRI</td>
        <td>SAT</td>
    </tr>
    <tr>
        <td class ="Sun"></td>
        <td></td>
        <td>1</td>
        <td>2</td>
        <td>3</td>
        <td>4</td>
        <td class ="Sat" >5</td>
    </tr>
    <tr>
        <td class ="Sun">6</td>
        <td>7</td>
        <td>8</td>
        <td>9</td>
        <td>10</td>
        <td>11</td>
        <td class ="Sat" >12</td>
    </tr>
    <tr>
        <td class ="Sun">13</td>
        <td>14</td>
        <td>15</td>
        <td>16</td>
        <td>17</td>
        <td>18</td>
        <td class ="Sat" >19</td>
    </tr>
    <tr>
        <td class ="Sun">20</td>
        <td>21</td>
        <td>22</td>
        <td>23</td>
        <td>24</td>
        <td>25</td>
        <td class ="Sat" >26</td>
    </tr>
        <tr>
        <td class ="Sun">27</td>
        <td>28</td>
        <td>29</td>
        <td>30</td>
        <td>31</td>
        <td></td>
        <td class ="Sat" ></td>
    </tr>
    <tr class ="emptyrow">
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    </tr>
    </table>`;
    return d;
    }



    function day431(check)
    {
        let m;
        if(check ==1)
            m=jan();
        else if(check ==2)
            m=feb();
        else if(check ==3)
            m=mar();
        else if(check ==4)
            m=apr();
        else if(check ==5)
            m=may();
        else if(check ==6)
            m=jun();
        else if(check ==7)
            m=jul();
        else if(check ==8)
            m=aug();
        else if(check ==9)
            m=sep();
        else if(check ==10)
            m=oct();
        else if(check ==11)
            m=nov();
        else
            m=dec();
        let d=`
        <table>
        <tr>
            <th colspan="7">
                ${m}
            </th>
        </tr>
        <tr class ="DayColor">
        <td>SUN</td>
        <td>MON</td>
        <td>TUE</td>
        <td>WED</td>
        <td>THU</td>
        <td>FRI</td>
        <td>SAT</td>
    </tr>
    <tr>
        <td class ="Sun"></td>
        <td></td>
        <td></td>
        <td>1</td>
        <td>2</td>
        <td>3</td>
        <td class ="Sat" >4</td>
    </tr>
    <tr>
        <td class ="Sun">5</td>
        <td>6</td>
        <td>7</td>
        <td>8</td>
        <td>9</td>
        <td>10</td>
        <td class ="Sat" >11</td>
    </tr>
    <tr>
        <td class ="Sun">12</td>
        <td>13</td>
        <td>14</td>
        <td>15</td>
        <td>16</td>
        <td>17</td>
        <td class ="Sat" >18</td>
    </tr>
    <tr>
        <td class ="Sun">19</td>
        <td>20</td>
        <td>21</td>
        <td>22</td>
        <td>23</td>
        <td>24</td>
        <td class ="Sat" >25</td>
    </tr>
    <tr>
        <td class ="Sun">26</td>
        <td>27</td>
        <td>28</td>
        <td>29</td>
        <td>30</td>
        <td>31</td>
        <td class ="Sat" ></td>

    </tr>
    <tr class ="emptyrow">
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    </tr>
    </table>`;
    return d;
    }



    function day531(check)
    {
        let m;
        if(check ==1)
            m=jan();
        else if(check ==2)
            m=feb();
        else if(check ==3)
            m=mar();
        else if(check ==4)
            m=apr();
        else if(check ==5)
            m=may();
        else if(check ==6)
            m=jun();
        else if(check ==7)
            m=jul();
        else if(check ==8)
            m=aug();
        else if(check ==9)
            m=sep();
        else if(check ==10)
            m=oct();
        else if(check ==11)
            m=nov();
        else
            m=dec();
        let d=`
        <table>
        <tr>
            <th colspan="7">
                ${m}
            </th>
        </tr>
        <tr class ="DayColor">
        <td>SUN</td>
        <td>MON</td>
        <td>TUE</td>
        <td>WED</td>
        <td>THU</td>
        <td>FRI</td>
        <td>SAT</td>
    </tr>
    <tr>
        <td class ="Sun"></td>
        <td></td>
        <td></td>
        <td></td>
        <td>1</td>
        <td>2</td>
        <td class ="Sat" >3</td>
    </tr>
    <tr>
        <td class ="Sun">4</td>
        <td>5</td>
        <td>6</td>
        <td>7</td>
        <td>8</td>
        <td>9</td>
        <td class ="Sat" >10</td>
    </tr>
    <tr>
        <td class ="Sun">11</td>
        <td>12</td>
        <td>13</td>
        <td>14</td>
        <td>15</td>
        <td>16</td>
        <td class ="Sat" >17</td>
    </tr>
    <tr>
        <td class ="Sun">18</td>
        <td>19</td>
        <td>20</td>
        <td>21</td>
        <td>22</td>
        <td>23</td>
        <td class ="Sat" >24</td>
    </tr>
    <tr>
        <td class ="Sun">25</td>
        <td>26</td>
        <td>27</td>
        <td>28</td>
        <td>29</td>
        <td>30</td>
        <td class ="Sat" >31</td>
    </tr>
    <tr class ="emptyrow">
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    </tr>
    </table>`;
    return d;
    }

    function day631(check)
    {
        let m;
        if(check ==1)
            m=jan();
        else if(check ==2)
            m=feb();
        else if(check ==3)
            m=mar();
        else if(check ==4)
            m=apr();
        else if(check ==5)
            m=may();
        else if(check ==6)
            m=jun();
        else if(check ==7)
            m=jul();
        else if(check ==8)
            m=aug();
        else if(check ==9)
            m=sep();
        else if(check ==10)
            m=oct();
        else if(check ==11)
            m=nov();
        else
            m=dec();
        let d=`
        <table>
        <tr>
            <th colspan="7">
                ${m}
            </th>
        </tr>
        <tr class ="DayColor">
        <td>SUN</td>
        <td>MON</td>
        <td>TUE</td>
        <td>WED</td>
        <td>THU</td>
        <td>FRI</td>
        <td>SAT</td>
    </tr>
    <tr>
        <td class ="Sun"></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>1</td>
        <td class ="Sat" >2</td>
    </tr>
    <tr>
        <td class ="Sun">3</td>
        <td>4</td>
        <td>5</td>
        <td>6</td>
        <td>7</td>
        <td>8</td>
        <td class ="Sat" >9</td>
    </tr>
    <tr>
        <td class ="Sun">10</td>
        <td>11</td>
        <td>12</td>
        <td>13</td>
        <td>14</td>
        <td>15</td>
        <td class ="Sat" >16</td>
    </tr>
    <tr>
        <td class ="Sun">17</td>
        <td>18</td>
        <td>19</td>
        <td>20</td>
        <td>21</td>
        <td>22</td>
        <td class ="Sat" >23</td>
    </tr>
    <tr>
        <td class ="Sun">24</td>
        <td>25</td>
        <td>26</td>
        <td>27</td>
        <td>28</td>
        <td>29</td>
        <td class ="Sat" >30</td>
    </tr>
    <tr>
        <td class ="Sun">31</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    </table>`;
    return d;
    }


    function day731(check)
    {
        let m;
        if(check ==1)
            m=jan();
        else if(check ==2)
            m=feb();
        else if(check ==3)
            m=mar();
        else if(check ==4)
            m=apr();
        else if(check ==5)
            m=may();
        else if(check ==6)
            m=jun();
        else if(check ==7)
            m=jul();
        else if(check ==8)
            m=aug();
        else if(check ==9)
            m=sep();
        else if(check ==10)
            m=oct();
        else if(check ==11)
            m=nov();
        else
            m=dec();
        let d=`
        <table>
        <tr>
            <th colspan="7">
                ${m}
            </th>
        </tr>
        <tr class ="DayColor">
        <td>SUN</td>
        <td>MON</td>
        <td>TUE</td>
        <td>WED</td>
        <td>THU</td>
        <td>FRI</td>
        <td>SAT</td>
    </tr>
    <tr>
        <td class ="Sun"></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td class ="Sat" >1</td>
    </tr>
    <tr>
        <td class ="Sun">2</td>
        <td>3</td>
        <td>4</td>
        <td>5</td>
        <td>6</td>
        <td>7</td>
        <td class ="Sat" >8</td>
    </tr>
    <tr>
        <td class ="Sun">9</td>
        <td>10</td>
        <td>11</td>
        <td>12</td>
        <td>13</td>
        <td>14</td>
        <td class ="Sat" >15</td>
    </tr>
    <tr>
        <td class ="Sun">16</td>
        <td>17</td>
        <td>18</td>
        <td>19</td>
        <td>20</td>
        <td>21</td>
        <td class ="Sat" >22</td>
    </tr>
    <tr>
        <td class ="Sun">23</td>
        <td>24</td>
        <td>25</td>
        <td>26</td>
        <td>27</td>
        <td>28</td>
        <td class ="Sat" >29</td>
    </tr>
    <tr>
        <td class ="Sun">30</td>
        <td>31</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    </table>`;
    return d;
    }







    function day130(check)
    {
        let m;
        if(check ==1)
            m=jan();
        else if(check ==2)
            m=feb();
        else if(check ==3)
            m=mar();
        else if(check ==4)
            m=apr();
        else if(check ==5)
            m=may();
        else if(check ==6)
            m=jun();
        else if(check ==7)
            m=jul();
        else if(check ==8)
            m=aug();
        else if(check ==9)
            m=sep();
        else if(check ==10)
            m=oct();
        else if(check ==11)
            m=nov();
        else
            m=dec();
        let d=`
        <table>
        <tr>
            <th colspan="7">
                ${m}
            </th>
        </tr>
        <tr class ="DayColor">
        <td>SUN</td>
        <td>MON</td>
        <td>TUE</td>
        <td>WED</td>
        <td>THU</td>
        <td>FRI</td>
        <td>SAT</td>
      </tr>
      <tr>
        <td class ="Sun">1</td>
        <td>2</td>
        <td>3</td>
        <td>4</td>
        <td>5</td>
        <td>6</td>
        <td class ="Sat" >7</td>
      </tr>
      <tr>
        <td class ="Sun">8</td>
        <td>9</td>
        <td>10</td>
        <td>11</td>
        <td>12</td>
        <td>13</td>
        <td class ="Sat" >14</td>
      </tr>
      <tr>
        <td class ="Sun">15</td>
        <td>16</td>
        <td>17</td>
        <td>18</td>
        <td>19</td>
        <td>20</td>
        <td class ="Sat" >21</td>
      </tr>
      <tr>
        <td class ="Sun">22</td>
        <td>23</td>
        <td>24</td>
        <td>25</td>
        <td>26</td>
        <td>27</td>
        <td class ="Sat" >28</td>
      </tr>
      <tr>
        <td class ="Sun">29</td>
        <td>30</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr class ="emptyrow">
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    </tr>
      </table>`;
      return d;
    }
    function day230(check)
    {
        let m;
        if(check ==1)
            m=jan();
        else if(check ==2)
            m=feb();
        else if(check ==3)
            m=mar();
        else if(check ==4)
            m=apr();
        else if(check ==5)
            m=may();
        else if(check ==6)
            m=jun();
        else if(check ==7)
            m=jul();
        else if(check ==8)
            m=aug();
        else if(check ==9)
            m=sep();
        else if(check ==10)
            m=oct();
        else if(check ==11)
            m=nov();
        else
            m=dec();
        let d=`
        <table>
        <tr>
            <th colspan="7">
                ${m}
            </th>
        </tr>
        <tr class ="DayColor">
        <td>SUN</td>
        <td>MON</td>
        <td>TUE</td>
        <td>WED</td>
        <td>THU</td>
        <td>FRI</td>
        <td>SAT</td>
      </tr>
      <tr>
        <td class ="Sun"></td>
        <td>1</td>
        <td>2</td>
        <td>3</td>
        <td>4</td>
        <td>5</td>
        <td>6</td>
    </tr>
      <tr>
        <td class ="Sun">7</td>
        <td>8</td>
        <td>9</td>
        <td>10</td>
        <td>11</td>
        <td>12</td>
        <td class ="Sat" >13</td>
    </tr>
    <tr>
        <td class ="Sun">14</td>
        <td>15</td>
        <td>16</td>
        <td>17</td>
        <td>18</td>
        <td>19</td>
        <td class ="Sat" >20</td>
    </tr>
    <tr>
        <td class ="Sun">21</td>
        <td>22</td>
        <td>23</td>
        <td>24</td>
        <td>25</td>
        <td>26</td>
        <td class ="Sat" >27</td>
    </tr>
    <tr>
        <td class ="Sun">28</td>
        <td>29</td>
        <td>30</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr class ="emptyrow">
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    </tr>
      </table>`;
      return d;
    }
   
   
    function day330(check)
    {
        let m;
        if(check ==1)
            m=jan();
        else if(check ==2)
            m=feb();
        else if(check ==3)
            m=mar();
        else if(check ==4)
            m=apr();
        else if(check ==5)
            m=may();
        else if(check ==6)
            m=jun();
        else if(check ==7)
            m=jul();
        else if(check ==8)
            m=aug();
        else if(check ==9)
            m=sep();
        else if(check ==10)
            m=oct();
        else if(check ==11)
            m=nov();
        else
            m=dec();
        let d=`
        <table>
        <tr>
            <th colspan="7">
                ${m}
            </th>
        </tr>
        <tr class ="DayColor">
        <td>SUN</td>
        <td>MON</td>
        <td>TUE</td>
        <td>WED</td>
        <td>THU</td>
        <td>FRI</td>
        <td>SAT</td>
      </tr>
      <tr>
         <td></td>
        <td></td>
        <td>1</td>
        <td>2</td>
        <td>3</td>
        <td>4</td>
        <td class ="Sat" >5</td>
    </tr>
    <tr>
        <td class ="Sun">6</td>
        <td>7</td>
        <td>8</td>
        <td>9</td>
        <td>10</td>
        <td>11</td>
        <td class ="Sat" >12</td>
    </tr>
    <tr>
        <td class ="Sun">13</td>
        <td>14</td>
        <td>15</td>
        <td>16</td>
        <td>17</td>
        <td>18</td>
        <td class ="Sat" >19</td>
    </tr>
    <tr>
        <td class ="Sun">20</td>
        <td>21</td>
        <td>22</td>
        <td>23</td>
        <td>24</td>
        <td>25</td>
        <td class ="Sat" >26</td>
    </tr>
        <tr>
        <td class ="Sun">27</td>
        <td>28</td>
        <td>29</td>
        <td>30</td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr class ="emptyrow">
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    </tr>
      </table>`;
      return d;
    }
   
   
   
    function day430(check)
    {
        let m;
        if(check ==1)
            m=jan();
        else if(check ==2)
            m=feb();
        else if(check ==3)
            m=mar();
        else if(check ==4)
            m=apr();
        else if(check ==5)
            m=may();
        else if(check ==6)
            m=jun();
        else if(check ==7)
            m=jul();
        else if(check ==8)
            m=aug();
        else if(check ==9)
            m=sep();
        else if(check ==10)
            m=oct();
        else if(check ==11)
            m=nov();
        else
            m=dec();
        let d=`
        <table>
        <tr>
            <th colspan="7">
                ${m}
            </th>
        </tr>
        <tr class ="DayColor">
        <td>SUN</td>
        <td>MON</td>
        <td>TUE</td>
        <td>WED</td>
        <td>THU</td>
        <td>FRI</td>
        <td>SAT</td>
      </tr>
      <tr>
         <td></td>
        <td></td>
        <td></td>
        <td>1</td>
        <td>2</td>
        <td>3</td>
        <td class ="Sat" >4</td>
    </tr>
    <tr>
        <td class ="Sun">5</td>
        <td>6</td>
        <td>7</td>
        <td>8</td>
        <td>9</td>
        <td>10</td>
        <td class ="Sat" >11</td>
    </tr>
    <tr>
        <td class ="Sun">12</td>
        <td>13</td>
        <td>14</td>
        <td>15</td>
        <td>16</td>
        <td>17</td>
        <td class ="Sat" >18</td>
    </tr>
    <tr>
        <td class ="Sun">19</td>
        <td>20</td>
        <td>21</td>
        <td>22</td>
        <td>23</td>
        <td>24</td>
        <td class ="Sat" >25</td>
    </tr>
    <tr>
        <td class ="Sun">26</td>
        <td>27</td>
        <td>28</td>
        <td>29</td>
        <td>30</td>
        <td></td>
        <td></td>
   
    </tr>
    <tr class ="emptyrow">
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    </tr>
      </table>`;
      return d;
    }
   
   
   
    function day530(check)
    {
        let m;
        if(check ==1)
            m=jan();
        else if(check ==2)
            m=feb();
        else if(check ==3)
            m=mar();
        else if(check ==4)
            m=apr();
        else if(check ==5)
            m=may();
        else if(check ==6)
            m=jun();
        else if(check ==7)
            m=jul();
        else if(check ==8)
            m=aug();
        else if(check ==9)
            m=sep();
        else if(check ==10)
            m=oct();
        else if(check ==11)
            m=nov();
        else
            m=dec();
        let d=`
        <table>
        <tr>
            <th colspan="7">
                ${m}
            </th>
        </tr>
        <tr class ="DayColor">
        <td>SUN</td>
        <td>MON</td>
        <td>TUE</td>
        <td>WED</td>
        <td>THU</td>
        <td>FRI</td>
        <td>SAT</td>
      </tr>
      <tr>
         <td></td>
         <td></td>
        <td></td>
        <td></td>
        <td>1</td>
        <td>2</td>
        <td class ="Sat" >3</td>
    </tr>
    <tr>
        <td class ="Sun">4</td>
        <td>5</td>
        <td>6</td>
        <td>7</td>
        <td>8</td>
        <td>9</td>
        <td class ="Sat" >10</td>
    </tr>
    <tr>
        <td class ="Sun">11</td>
        <td>12</td>
        <td>13</td>
        <td>14</td>
        <td>15</td>
        <td>16</td>
        <td class ="Sat" >17</td>
    </tr>
    <tr>
        <td class ="Sun">18</td>
        <td>19</td>
        <td>20</td>
        <td>21</td>
        <td>22</td>
        <td>23</td>
        <td class ="Sat" >24</td>
    </tr>
    <tr>
        <td class ="Sun">25</td>
        <td>26</td>
        <td>27</td>
        <td>28</td>
        <td>29</td>
        <td>30</td>
        <td></td>
    </tr>
    <tr class ="emptyrow">
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    </tr>
      </table>`;
      return d;
    }
   
    function day630(check)
    {
        let m;
        if(check ==1)
            m=jan();
        else if(check ==2)
            m=feb();
        else if(check ==3)
            m=mar();
        else if(check ==4)
            m=apr();
        else if(check ==5)
            m=may();
        else if(check ==6)
            m=jun();
        else if(check ==7)
            m=jul();
        else if(check ==8)
            m=aug();
        else if(check ==9)
            m=sep();
        else if(check ==10)
            m=oct();
        else if(check ==11)
            m=nov();
        else
            m=dec();
        let d=`
        <table>
        <tr>
            <th colspan="7">
                ${m}
            </th>
        </tr>
        <tr class ="DayColor">
        <td>SUN</td>
        <td>MON</td>
        <td>TUE</td>
        <td>WED</td>
        <td>THU</td>
        <td>FRI</td>
        <td>SAT</td>
      </tr>
      <tr>
         <td></td>
         <td></td>
         <td></td>
        <td></td>
        <td></td>
        <td>1</td>
        <td class ="Sat" >2</td>
    </tr>
    <tr>
        <td class ="Sun">3</td>
        <td>4</td>
        <td>5</td>
        <td>6</td>
        <td>7</td>
        <td>8</td>
        <td class ="Sat" >9</td>
    </tr>
    <tr>
        <td class ="Sun">10</td>
        <td>11</td>
        <td>12</td>
        <td>13</td>
        <td>14</td>
        <td>15</td>
        <td class ="Sat" >16</td>
    </tr>
    <tr>
        <td class ="Sun">17</td>
        <td>18</td>
        <td>19</td>
        <td>20</td>
        <td>21</td>
        <td>22</td>
        <td class ="Sat" >23</td>
    </tr>
    <tr>
        <td class ="Sun">24</td>
        <td>25</td>
        <td>26</td>
        <td>27</td>
        <td>28</td>
        <td>29</td>
        <td class ="Sat" >30</td>
    </tr>
    <tr class ="emptyrow">
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    </tr>
      </table>`;
      return d;
    }
   
   
    function day730(check)
    {
        let m;
        if(check ==1)
            m=jan();
        else if(check ==2)
            m=feb();
        else if(check ==3)
            m=mar();
        else if(check ==4)
            m=apr();
        else if(check ==5)
            m=may();
        else if(check ==6)
            m=jun();
        else if(check ==7)
            m=jul();
        else if(check ==8)
            m=aug();
        else if(check ==9)
            m=sep();
        else if(check ==10)
            m=oct();
        else if(check ==11)
            m=nov();
        else
            m=dec();
        let d=`
        <table>
        <tr>
            <th colspan="7">
                ${m}
            </th>
        </tr>
        <tr class ="DayColor">
        <td>SUN</td>
        <td>MON</td>
        <td>TUE</td>
        <td>WED</td>
        <td>THU</td>
        <td>FRI</td>
        <td>SAT</td>
      </tr>
      <tr>
         <td></td>
         <td></td>
         <td></td>
         <td></td>
        <td></td>
        <td></td>
        <td class ="Sat" >1</td>
    </tr>
    <tr>
        <td class ="Sun">2</td>
        <td>3</td>
        <td>4</td>
        <td>5</td>
        <td>6</td>
        <td>7</td>
        <td class ="Sat" >8</td>
    </tr>
    <tr>
        <td class ="Sun">9</td>
        <td>10</td>
        <td>11</td>
        <td>12</td>
        <td>13</td>
        <td>14</td>
        <td class ="Sat" >15</td>
    </tr>
    <tr>
        <td class ="Sun">16</td>
        <td>17</td>
        <td>18</td>
        <td>19</td>
        <td>20</td>
        <td>21</td>
        <td class ="Sat" >22</td>
    </tr>
    <tr>
        <td class ="Sun">23</td>
        <td>24</td>
        <td>25</td>
        <td>26</td>
        <td>27</td>
        <td>28</td>
        <td class ="Sat" >29</td>
    </tr>
    <tr>
        <td class ="Sun">30</td>
        <td></td>
         <td></td>
         <td></td>
         <td></td>
        <td></td>
        <td class ="Sat" ></td>
    </tr>
      </table>`;
      return d;
    }










   
function day129(check)
{
    let m;
    if(check ==1)
        m=jan();
    else if(check ==2)
        m=feb();
    else if(check ==3)
        m=mar();
    else if(check ==4)
        m=apr();
    else if(check ==5)
        m=may();
    else if(check ==6)
        m=jun();
    else if(check ==7)
        m=jul();
    else if(check ==8)
        m=aug();
    else if(check ==9)
        m=sep();
    else if(check ==10)
        m=oct();
    else if(check ==11)
        m=nov();
    else
        m=dec();
    let d=`
    <table>
    <tr>
        <th colspan="7">
            ${m}
        </th>
    </tr>
    <tr class ="DayColor">
    <td>SUN</td>
    <td>MON</td>
    <td>TUE</td>
    <td>WED</td>
    <td>THU</td>
    <td>FRI</td>
    <td>SAT</td>
  </tr>
  <tr>
    <td class="Sun">1</td>
    <td>2</td>
    <td>3</td>
    <td>4</td>
    <td>5</td>
    <td>6</td>
    <td class ="Sat" >7</td>
  </tr>
  <tr>
    <td class="Sun">8</td>
    <td>9</td>
    <td>10</td>
    <td>11</td>
    <td>12</td>
    <td>13</td>
    <td class ="Sat" >14</td>
  </tr>
  <tr>
    <td class="Sun">15</td>
    <td>16</td>
    <td>17</td>
    <td>18</td>
    <td>19</td>
    <td>20</td>
    <td>21</td>
  </tr>
  <tr>
    <td class="Sun">22</td>
    <td>23</td>
    <td>24</td>
    <td>25</td>
    <td>26</td>
    <td>27</td>
    <td class ="Sat" >28</td>
  </tr>
  <tr>
    <td class="Sun">29</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr class="emptyrow">
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    </tr>
  </table>`;
  return d;
}
function day229(check)
{
    let m;
    if(check ==1)
        m=jan();
    else if(check ==2)
        m=feb();
    else if(check ==3)
        m=mar();
    else if(check ==4)
        m=apr();
    else if(check ==5)
        m=may();
    else if(check ==6)
        m=jun();
    else if(check ==7)
        m=jul();
    else if(check ==8)
        m=aug();
    else if(check ==9)
        m=sep();
    else if(check ==10)
        m=oct();
    else if(check ==11)
        m=nov();
    else
        m=dec();
    let d=`
    <table>
    <tr>
        <th colspan="7">
            ${m}
        </th>
    </tr>
    <tr class ="DayColor">
    <td>SUN</td>
    <td>MON</td>
    <td>TUE</td>
    <td>WED</td>
    <td>THU</td>
    <td>FRI</td>
    <td>SAT</td>
  </tr>
  <tr>
    <td class="Sun"></td>
    <td>1</td>
    <td>2</td>
    <td>3</td>
    <td>4</td>
    <td>5</td>
    <td class ="Sat" >6</td>
</tr>
  <tr>
    <td class="Sun">7</td>
    <td>8</td>
    <td>9</td>
    <td>10</td>
    <td>11</td>
    <td>12</td>
    <td class ="Sat" >13</td>
</tr>
<tr>
    <td class="Sun">14</td>
    <td>15</td>
    <td>16</td>
    <td>17</td>
    <td>18</td>
    <td>19</td>
    <td class ="Sat" >20</td>
</tr>
<tr>
    <td class="Sun">21</td>
    <td>22</td>
    <td>23</td>
    <td>24</td>
    <td>25</td>
    <td>26</td>
    <td class ="Sat" >27</td>
</tr>
<tr>
    <td class="Sun">28</td>
    <td>29</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
</tr>
<tr class="emptyrow">
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
  </table>`;
  return d;
}


function day329(check)
{
    let m;
    if(check ==1)
        m=jan();
    else if(check ==2)
        m=feb();
    else if(check ==3)
        m=mar();
    else if(check ==4)
        m=apr();
    else if(check ==5)
        m=may();
    else if(check ==6)
        m=jun();
    else if(check ==7)
        m=jul();
    else if(check ==8)
        m=aug();
    else if(check ==9)
        m=sep();
    else if(check ==10)
        m=oct();
    else if(check ==11)
        m=nov();
    else
        m=dec();
    let d=`
    <table>
    <tr>
        <th colspan="7">
            ${m}
        </th>
    </tr>
    <tr class ="DayColor">
    <td>SUN</td>
    <td>MON</td>
    <td>TUE</td>
    <td>WED</td>
    <td>THU</td>
    <td>FRI</td>
    <td>SAT</td>
  </tr>
  <tr>
     <td></td>
    <td></td>
    <td>1</td>
    <td>2</td>
    <td>3</td>
    <td>4</td>
    <td class ="Sat" >5</td>
</tr>
<tr>
    <td class="Sun">6</td>
    <td>7</td>
    <td>8</td>
    <td>9</td>
    <td>10</td>
    <td>11</td>
    <td class ="Sat" >12</td>
</tr>
<tr>
    <td class="Sun">13</td>
    <td>14</td>
    <td>15</td>
    <td>16</td>
    <td>17</td>
    <td>18</td>
    <td class ="Sat" >19</td>
</tr>
<tr>
    <td class="Sun">20</td>
    <td>21</td>
    <td>22</td>
    <td>23</td>
    <td>24</td>
    <td>25</td>
    <td class ="Sat" >26</td>
</tr>
    <tr>
    <td class="Sun">27</td>
    <td>28</td>
    <td>29</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
</tr>
<tr class ="emptyrow">
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
</tr>
  </table>`;
  return d;
}



function day429(check)
{
    let m;
    if(check ==1)
        m=jan();
    else if(check ==2)
        m=feb();
    else if(check ==3)
        m=mar();
    else if(check ==4)
        m=apr();
    else if(check ==5)
        m=may();
    else if(check ==6)
        m=jun();
    else if(check ==7)
        m=jul();
    else if(check ==8)
        m=aug();
    else if(check ==9)
        m=sep();
    else if(check ==10)
        m=oct();
    else if(check ==11)
        m=nov();
    else
        m=dec();
    let d=`
    <table>
    <tr>
        <th colspan="7">
            ${m}
        </th>
    </tr>
    <tr class ="DayColor">
    <td>SUN</td>
    <td>MON</td>
    <td>TUE</td>
    <td>WED</td>
    <td>THU</td>
    <td>FRI</td>
    <td>SAT</td>
  </tr>
  <tr>
     <td></td>
    <td></td>
    <td></td>
    <td>1</td>
    <td>2</td>
    <td>3</td>
    <td class ="Sat" >4</td>
</tr>
<tr>
    <td class="Sun">5</td>
    <td>6</td>
    <td>7</td>
    <td>8</td>
    <td>9</td>
    <td>10</td>
    <td class ="Sat" >11</td>
</tr>
<tr>
    <td class="Sun">12</td>
    <td>13</td>
    <td>14</td>
    <td>15</td>
    <td>16</td>
    <td>17</td>
    <td class ="Sat" >18</td>
</tr>
<tr>
    <td class="Sun">19</td>
    <td>20</td>
    <td>21</td>
    <td>22</td>
    <td>23</td>
    <td>24</td>
    <td class ="Sat" >25</td>
</tr>
<tr>
    <td class="Sun">26</td>
    <td>27</td>
    <td>28</td>
    <td>29</td>
    <td></td>
    <td></td>
    <td></td>
</tr>
<tr class ="emptyrow">
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
</tr>
  </table>`;
  return d;
}



function day529(check)
{
    let m;
    if(check ==1)
        m=jan();
    else if(check ==2)
        m=feb();
    else if(check ==3)
        m=mar();
    else if(check ==4)
        m=apr();
    else if(check ==5)
        m=may();
    else if(check ==6)
        m=jun();
    else if(check ==7)
        m=jul();
    else if(check ==8)
        m=aug();
    else if(check ==9)
        m=sep();
    else if(check ==10)
        m=oct();
    else if(check ==11)
        m=nov();
    else
        m=dec();
    let d=`
    <table>
    <tr>
        <th colspan="7">
            ${m}
        </th>
    </tr>
    <tr class ="DayColor">
    <td>SUN</td>
    <td>MON</td>
    <td>TUE</td>
    <td>WED</td>
    <td>THU</td>
    <td>FRI</td>
    <td>SAT</td>
  </tr>
  <tr>
     <td></td>
     <td></td>
    <td></td>
    <td></td>
    <td>1</td>
    <td>2</td>
    <td class ="Sat" >3</td>
</tr>
<tr>
    <td class="Sun">4</td>
    <td>5</td>
    <td>6</td>
    <td>7</td>
    <td>8</td>
    <td>9</td>
    <td class ="Sat" >10</td>
</tr>
<tr>
    <td class="Sun">11</td>
    <td>12</td>
    <td>13</td>
    <td>14</td>
    <td>15</td>
    <td>16</td>
    <td class ="Sat" >17</td>
</tr>
<tr>
    <td class="Sun">18</td>
    <td>19</td>
    <td>20</td>
    <td>21</td>
    <td>22</td>
    <td>23</td>
    <td class ="Sat" >24</td>
</tr>
<tr>
    <td class="Sun">25</td>
    <td>26</td>
    <td>27</td>
    <td>28</td>
    <td>29</td>
    <td></td>
    <td></td>
</tr>
<tr class ="emptyrow">
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
</tr>
  </table>`;
  return d;
}

function day629(check)
{
    let m;
    if(check ==1)
        m=jan();
    else if(check ==2)
        m=feb();
    else if(check ==3)
        m=mar();
    else if(check ==4)
        m=apr();
    else if(check ==5)
        m=may();
    else if(check ==6)
        m=jun();
    else if(check ==7)
        m=jul();
    else if(check ==8)
        m=aug();
    else if(check ==9)
        m=sep();
    else if(check ==10)
        m=oct();
    else if(check ==11)
        m=nov();
    else
        m=dec();
    let d=`
    <table>
    <tr>
        <th colspan="7">
            ${m}
        </th>
    </tr>
    <tr class ="DayColor">
    <td>SUN</td>
    <td>MON</td>
    <td>TUE</td>
    <td>WED</td>
    <td>THU</td>
    <td>FRI</td>
    <td>SAT</td>
  </tr>
  <tr>
     <td></td>
     <td></td>
     <td></td>
    <td></td>
    <td></td>
    <td>1</td>
    <td class ="Sat" >2</td>
</tr>
<tr>
    <td class="Sun">3</td>
    <td>4</td>
    <td>5</td>
    <td>6</td>
    <td>7</td>
    <td>8</td>
    <td class ="Sat" >9</td>
</tr>
<tr>
    <td class="Sun">10</td>
    <td>11</td>
    <td>12</td>
    <td>13</td>
    <td>14</td>
    <td>15</td>
    <td class ="Sat" >16</td>
</tr>
<tr>
    <td class="Sun">17</td>
    <td>18</td>
    <td>19</td>
    <td>20</td>
    <td>21</td>
    <td>22</td>
    <td class ="Sat" >23</td>
</tr>
<tr>
    <td class="Sun">24</td>
    <td>25</td>
    <td>26</td>
    <td>27</td>
    <td>28</td>
    <td>29</td>
    <td></td>
</tr>
<tr class ="emptyrow">
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
</tr>
  </table>`;
  return d;
}


function day729(check)
{
    let m;
    if(check ==1)
        m=jan();
    else if(check ==2)
        m=feb();
    else if(check ==3)
        m=mar();
    else if(check ==4)
        m=apr();
    else if(check ==5)
        m=may();
    else if(check ==6)
        m=jun();
    else if(check ==7)
        m=jul();
    else if(check ==8)
        m=aug();
    else if(check ==9)
        m=sep();
    else if(check ==10)
        m=oct();
    else if(check ==11)
        m=nov();
    else
        m=dec();
    let d=`
    <table>
    <tr>
        <th colspan="7">
            ${m}
        </th>
    </tr>
    <tr class ="DayColor">
    <td>SUN</td>
    <td>MON</td>
    <td>TUE</td>
    <td>WED</td>
    <td>THU</td>
    <td>FRI</td>
    <td>SAT</td>
  </tr>
  <tr>
     <td></td>
     <td></td>
     <td></td>
     <td></td>
    <td></td>
    <td></td>
    <td class ="Sat" >1</td>
</tr>
<tr>
    <td class="Sun">2</td>
    <td>3</td>
    <td>4</td>
    <td>5</td>
    <td>6</td>
    <td>7</td>
    <td class ="Sat" >8</td>
</tr>
<tr>
    <td class="Sun">9</td>
    <td>10</td>
    <td>11</td>
    <td>12</td>
    <td>13</td>
    <td>14</td>
    <td class ="Sat" >15</td>
</tr>
<tr>
    <td class="Sun">16</td>
    <td>17</td>
    <td>18</td>
    <td>19</td>
    <td>20</td>
    <td>21</td>
    <td class ="Sat" >22</td>
</tr>
<tr>
    <td class="Sun">23</td>
    <td>24</td>
    <td>25</td>
    <td>26</td>
    <td>27</td>
    <td>28</td>
    <td class ="Sat" >29</td>
</tr>
<tr class ="emptyrow">
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
</tr>
  </table>`;
  return d;
}


function day128(check)
{
    let m;
    if(check ==1)
        m=jan();
    else if(check ==2)
        m=feb();
    else if(check ==3)
        m=mar();
    else if(check ==4)
        m=apr();
    else if(check ==5)
        m=may();
    else if(check ==6)
        m=jun();
    else if(check ==7)
        m=jul();
    else if(check ==8)
        m=aug();
    else if(check ==9)
        m=sep();
    else if(check ==10)
        m=oct();
    else if(check ==11)
        m=nov();
    else
        m=dec();
    let d=`
    <table>
    <tr>
        <th colspan="7">
            ${m}
        </th>
    </tr>
    <tr class ="DayColor">
    <td>SUN</td>
    <td>MON</td>
    <td>TUE</td>
    <td>WED</td>
    <td>THU</td>
    <td>FRI</td>
    <td>SAT</td>
  </tr>
  <tr>
    <td class="Sun">1</td>
    <td>2</td>
    <td>3</td>
    <td>4</td>
    <td>5</td>
    <td>6</td>
    <td class ="Sat" >7</td>
  </tr>
  <tr>
    <td class="Sun">8</td>
    <td>9</td>
    <td>10</td>
    <td>11</td>
    <td>12</td>
    <td>13</td>
    <td class ="Sat" >14</td>
  </tr>
  <tr>
    <td class="Sun">15</td>
    <td>16</td>
    <td>17</td>
    <td>18</td>
    <td>19</td>
    <td>20</td>
    <td class ="Sat" >21</td>
  </tr>
  <tr>
    <td class="Sun">22</td>
    <td>23</td>
    <td>24</td>
    <td>25</td>
    <td>26</td>
    <td>27</td>
    <td class ="Sat" >28</td>
  </tr>
  <tr class ="emptyrow">
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
</tr>
<tr class ="emptyrow">
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
</tr>
  </table>`;
  return d;
}
function day228(check)
{
    let m;
    if(check ==1)
        m=jan();
    else if(check ==2)
        m=feb();
    else if(check ==3)
        m=mar();
    else if(check ==4)
        m=apr();
    else if(check ==5)
        m=may();
    else if(check ==6)
        m=jun();
    else if(check ==7)
        m=jul();
    else if(check ==8)
        m=aug();
    else if(check ==9)
        m=sep();
    else if(check ==10)
        m=oct();
    else if(check ==11)
        m=nov();
    else
        m=dec();
    let d=`
    <table>
    <tr>
        <th colspan="7">
            ${m}
        </th>
    </tr>
    <tr class ="DayColor">
    <td>SUN</td>
    <td>MON</td>
    <td>TUE</td>
    <td>WED</td>
    <td>THU</td>
    <td>FRI</td>
    <td>SAT</td>
  </tr>
  <tr>
    <td class="Sun"></td>
    <td>1</td>
    <td>2</td>
    <td>3</td>
    <td>4</td>
    <td>5</td>
    <td class ="Sat" >6</td>
</tr>
  <tr>
    <td class="Sun">7</td>
    <td>8</td>
    <td>9</td>
    <td>10</td>
    <td>11</td>
    <td>12</td>
    <td class ="Sat" >13</td>
</tr>
<tr>
    <td class="Sun">14</td>
    <td>15</td>
    <td>16</td>
    <td>17</td>
    <td>18</td>
    <td>19</td>
    <td>20</td>
</tr>
<tr>
    <td class="Sun">21</td>
    <td>22</td>
    <td>23</td>
    <td>24</td>
    <td>25</td>
    <td>26</td>
    <td class ="Sat" >27</td>
</tr>
<tr>
    <td class="Sun">28</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td class ="Sat" ></td>
</tr>
<tr class ="emptyrow">
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td class ="Sat" ></td>
</tr>
  </table>`;
  return d;
}


function day328(check)
{
    let m;
    if(check ==1)
        m=jan();
    else if(check ==2)
        m=feb();
    else if(check ==3)
        m=mar();
    else if(check ==4)
        m=apr();
    else if(check ==5)
        m=may();
    else if(check ==6)
        m=jun();
    else if(check ==7)
        m=jul();
    else if(check ==8)
        m=aug();
    else if(check ==9)
        m=sep();
    else if(check ==10)
        m=oct();
    else if(check ==11)
        m=nov();
    else
        m=dec();
    let d=`
    <table>
    <tr>
        <th colspan="7">
            ${m}
        </th>
    </tr>
    <tr class ="DayColor">
    <td>SUN</td>
    <td>MON</td>
    <td>TUE</td>
    <td>WED</td>
    <td>THU</td>
    <td>FRI</td>
    <td>SAT</td>
  </tr>
  <tr>
     <td></td>
    <td></td>
    <td>1</td>
    <td>2</td>
    <td>3</td>
    <td>4</td>
    <td class ="Sat" >5</td>
</tr>
<tr>
    <td class="Sun">6</td>
    <td>7</td>
    <td>8</td>
    <td>9</td>
    <td>10</td>
    <td>11</td>
    <td class ="Sat" >12</td>
</tr>
<tr>
    <td class="Sun">13</td>
    <td>14</td>
    <td>15</td>
    <td>16</td>
    <td>17</td>
    <td>18</td>
    <td class ="Sat" >19</td>
</tr>
<tr>
    <td class="Sun">20</td>
    <td>21</td>
    <td>22</td>
    <td>23</td>
    <td>24</td>
    <td>25</td>
    <td class ="Sat" >26</td>
</tr>
    <tr>
    <td class="Sun">27</td>
    <td>28</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
</tr>
<tr class ="emptyrow">
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
</tr>
  </table>`;
  return d;
}



function day428(check)
{
    let m;
    if(check ==1)
        m=jan();
    else if(check ==2)
        m=feb();
    else if(check ==3)
        m=mar();
    else if(check ==4)
        m=apr();
    else if(check ==5)
        m=may();
    else if(check ==6)
        m=jun();
    else if(check ==7)
        m=jul();
    else if(check ==8)
        m=aug();
    else if(check ==9)
        m=sep();
    else if(check ==10)
        m=oct();
    else if(check ==11)
        m=nov();
    else
        m=dec();
    let d=`
    <table>
    <tr>
        <th colspan="7">
            ${m}
        </th>
    </tr>
    <tr class ="DayColor">
    <td>SUN</td>
    <td>MON</td>
    <td>TUE</td>
    <td>WED</td>
    <td>THU</td>
    <td>FRI</td>
    <td>SAT</td>
  </tr>
  <tr>
     <td></td>
    <td></td>
    <td></td>
    <td>1</td>
    <td>2</td>
    <td>3</td>
    <td class ="Sat" >4</td>
</tr>
<tr>
    <td class="Sun">5</td>
    <td>6</td>
    <td>7</td>
    <td>8</td>
    <td>9</td>
    <td>10</td>
    <td class ="Sat" >11</td>
</tr>
<tr>
    <td class="Sun">12</td>
    <td>13</td>
    <td>14</td>
    <td>15</td>
    <td>16</td>
    <td>17</td>
    <td class ="Sat" >18</td>
</tr>
<tr>
    <td class="Sun">19</td>
    <td>20</td>
    <td>21</td>
    <td>22</td>
    <td>23</td>
    <td>24</td>
    <td class ="Sat" >25</td>
</tr>
<tr>
    <td class="Sun">26</td>
    <td>27</td>
    <td>28</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>

</tr>
<tr class ="emptyrow">
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
</tr>
  </table>`;
  return d;
}



function day528(check)
{
    let m;
    if(check ==1)
        m=jan();
    else if(check ==2)
        m=feb();
    else if(check ==3)
        m=mar();
    else if(check ==4)
        m=apr();
    else if(check ==5)
        m=may();
    else if(check ==6)
        m=jun();
    else if(check ==7)
        m=jul();
    else if(check ==8)
        m=aug();
    else if(check ==9)
        m=sep();
    else if(check ==10)
        m=oct();
    else if(check ==11)
        m=nov();
    else
        m=dec();
    let d=`
    <table>
    <tr>
        <th colspan="7">
            ${m}
        </th>
    </tr>
    <tr class ="DayColor">
    <td>SUN</td>
    <td>MON</td>
    <td>TUE</td>
    <td>WED</td>
    <td>THU</td>
    <td>FRI</td>
    <td>SAT</td>
  </tr>
  <tr>
     <td></td>
     <td></td>
    <td></td>
    <td></td>
    <td>1</td>
    <td>2</td>
    <td class ="Sat" >3</td>
</tr>
<tr>
    <td class="Sun">4</td>
    <td>5</td>
    <td>6</td>
    <td>7</td>
    <td>8</td>
    <td>9</td>
    <td class ="Sat" >10</td>
</tr>
<tr>
    <td class="Sun">11</td>
    <td>12</td>
    <td>13</td>
    <td>14</td>
    <td>15</td>
    <td>16</td>
    <td class ="Sat" >17</td>
</tr>
<tr>
    <td class="Sun">18</td>
    <td>19</td>
    <td>20</td>
    <td>21</td>
    <td>22</td>
    <td>23</td>
    <td class ="Sat" >24</td>
</tr>
<tr>
    <td class="Sun">25</td>
    <td>26</td>
    <td>27</td>
    <td>28</td>
    <td></td>
    <td></td>
    <td></td>
</tr>
<tr class ="emptyrow">
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
</tr>
  </table>`;
  return d;
}

function day628(check)
{
    let m;
    if(check ==1)
        m=jan();
    else if(check ==2)
        m=feb();
    else if(check ==3)
        m=mar();
    else if(check ==4)
        m=apr();
    else if(check ==5)
        m=may();
    else if(check ==6)
        m=jun();
    else if(check ==7)
        m=jul();
    else if(check ==8)
        m=aug();
    else if(check ==9)
        m=sep();
    else if(check ==10)
        m=oct();
    else if(check ==11)
        m=nov();
    else
        m=dec();
    let d=`
    <table>
    <tr>
        <th colspan="7">
            ${m}
        </th>
    </tr>
    <tr class ="DayColor">
    <td>SUN</td>
    <td>MON</td>
    <td>TUE</td>
    <td>WED</td>
    <td>THU</td>
    <td>FRI</td>
    <td>SAT</td>
  </tr>
  <tr>
     <td></td>
     <td></td>
     <td></td>
    <td></td>
    <td></td>
    <td>1</td>
    <td class ="Sat" >2</td>
</tr>
<tr>
    <td class="Sun">3</td>
    <td>4</td>
    <td>5</td>
    <td>6</td>
    <td>7</td>
    <td>8</td>
    <td class ="Sat" >9</td>
</tr>
<tr>
    <td class="Sun">10</td>
    <td>11</td>
    <td>12</td>
    <td>13</td>
    <td>14</td>
    <td>15</td>
    <td class ="Sat" >16</td>
</tr>
<tr>
    <td class="Sun">17</td>
    <td>18</td>
    <td>19</td>
    <td>20</td>
    <td>21</td>
    <td>22</td>
    <td class ="Sat" >23</td>
</tr>
<tr>
    <td class="Sun">24</td>
    <td>25</td>
    <td>26</td>
    <td>27</td>
    <td>28</td>
    <td></td>
    <td class ="Sat" ></td>
</tr>
<tr class ="emptyrow">
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td class ="Sat" ></td>
</tr>
  </table>`;
  return d;
}

function day728(check)
{
    let m;
    if(check ==1)
        m=jan();
    else if(check ==2)
        m=feb();
    else if(check ==3)
        m=mar();
    else if(check ==4)
        m=apr();
    else if(check ==5)
        m=may();
    else if(check ==6)
        m=jun();
    else if(check ==7)
        m=jul();
    else if(check ==8)
        m=aug();
    else if(check ==9)
        m=sep();
    else if(check ==10)
        m=oct();
    else if(check ==11)
        m=nov();
    else
        m=dec();
    let d=`
    <table>
    <tr>
        <th colspan="7">
            ${m}
        </th>
    </tr>
    <tr class ="DayColor">
    <td>SUN</td>
    <td>MON</td>
    <td>TUE</td>
    <td>WED</td>
    <td>THU</td>
    <td>FRI</td>
    <td>SAT</td>
  </tr>
  <tr>
     <td></td>
     <td></td>
     <td></td>
     <td></td>
    <td></td>
    <td></td>
    <td class ="Sat" >1</td>
</tr>
<tr>
    <td class="Sun">2</td>
    <td>3</td>
    <td>4</td>
    <td>5</td>
    <td>6</td>
    <td>7</td>
    <td class ="Sat" >8</td>
</tr>
<tr>
    <td class="Sun">9</td>
    <td>10</td>
    <td>11</td>
    <td>12</td>
    <td>13</td>
    <td>14</td>
    <td class ="Sat" >15</td>
</tr>
<tr>
    <td class="Sun">16</td>
    <td>17</td>
    <td>18</td>
    <td>19</td>
    <td>20</td>
    <td>21</td>
    <td class ="Sat" >22</td>
</tr>
<tr>
    <td class="Sun">23</td>
    <td>24</td>
    <td>25</td>
    <td>26</td>
    <td>27</td>
    <td>28</td>
    <td></td>
</tr>
<tr class ="emptyrow">
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
</tr>
  </table>`;
  return d;
}


function bil(){
    let year;
    year =getYear();

    if (year>0) {
       
   
    let sum = 0;
    let  month, date, i, total;
    //Enter a year :
    //scanf("%d", &year);
    date = 1, month = 1;
   
        for (i = 1; i < year; i++)
        {
            sum = sum + 365.25;
            //change if
            if(i%28==0)
            {
                sum=0;
            }
        }
        console.log(sum);
        // console.log("The total days is in calender upto this date is %f \n", sum);
        let dayssum, z;
        dayssum = Math.floor(sum);
        z = dayssum % 7;
        //console.log("Total round figure days upto this date is %d \n", dayssum);
       // console.log("Extra days in that year (for caluculation)is %d \n", z);
        let yearcheck;

        if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0)
        {
            //console.log("It is a leap year
            yearcheck = 1;
            let jan = 0, feb = 31, mar = 29, apr = 31, may = 30, jun = 31, july = 30, aug = 31, sep = 31, oct = 30, nov = 31, dec = 30;
            if (month == 1 && 0 < date && date < 32)
                total = z + jan + date;
            else if (month == 2 && 0 < date && date < 30)
                total = z + jan + feb + date;
            else if (month == 3 && 0 < date && date < 32)
                total = z + jan + feb + mar + date;
            else if (month == 4 && 0 < date && date < 31)
                total = z + jan + feb + mar + apr + date;
            else if (month == 5 && 0 < date && date < 32)
                total = z + jan + feb + mar + apr + may + date;
            else if (month == 6 && 0 < date && date < 31)
                total = z + jan + feb + mar + apr + may + jun + date;
            else if (month == 7 && 0 < date && date < 32)
                total = z + jan + feb + mar + apr + may + jun + july + date;
            else if (month == 8 && 0 < date && date < 32)
                total = z + jan + feb + mar + apr + may + jun + july + aug + date;
            else if (month == 9 && 0 < date && date < 31)
                total = z + jan + feb + mar + apr + may + jun + july + aug + sep + date;
            else if (month == 10 && 0 < date && date < 32)
                total = z + jan + feb + mar + apr + may + jun + july + aug + sep + oct + date;
            else if (month == 11 && 0 < date && date < 31)
                total = z + jan + feb + mar + apr + may + jun + july + aug + sep + oct + nov + date;
            else if (month == 12 && 0 < date && date < 32)
                total = z + jan + feb + mar + apr + may + jun + july + aug + sep + oct + nov + dec + date;
            else if (month < 1 || month > 12)
            {
                console.log("Enter a correct month first");
            }
            else
            {
                console.log("Enter correct day");
            }
            console.log("Total (for caluculation) %d\n", total);
        }
        else
        {
             //It not a leap year);
            yearcheck = 2;
            let jan = 0, feb = 31, mar = 28, apr = 31, may = 30, jun = 31, july = 30, aug = 31, sep = 31, oct = 30, nov = 31, dec = 30;
            if (month == 1 && 0 < date && date < 32)
                total = z + jan + date;
            else if (month == 2 && 0 < date && date < 29)
                total = z + jan + feb + date;
            else if (month == 3 && 0 < date && date < 32)
                total = z + jan + feb + mar + date;
            else if (month == 4 && 0 < date && date < 31)
                total = z + jan + feb + mar + apr + date;
            else if (month == 5 && 0 < date && date < 32)
                total = z + jan + feb + mar + apr + may + date;
            else if (month == 6 && 0 < date && date < 31)
                total = z + jan + feb + mar + apr + may + jun + date;
            else if (month == 7 && 0 < date && date < 32)
                total = z + jan + feb + mar + apr + may + jun + july + date;
            else if (month == 8 && 0 < date && date < 32)
                total = z + jan + feb + mar + apr + may + jun + july + aug + date;
            else if (month == 9 && 0 < date && date < 31)
                total = z + jan + feb + mar + apr + may + jun + july + aug + sep + date;
            else if (month == 10 && 0 < date && date < 32)
                total = z + jan + feb + mar + apr + may + jun + july + aug + sep + oct + date;
            else if (month == 11 && 0 < date && date < 31)
                total = z + jan + feb + mar + apr + may + jun + july + aug + sep + oct + nov + date;
            else if (month == 12 && 0 < date && date < 32)
                total = z + jan + feb + mar + apr + may + jun + july + aug + sep + oct + nov + dec + date;
            else if (month < 1 || month > 12)
            {
                console.log("Enter a correct month first");
            }
            else
            {
                console.log("Enter correct day");
            }
            console.log("Total (for caluculation) %d\n", total);
        }
        let arr=[total,yearcheck]
        return arr;
    }
    else{
        let arr=[-1,-1]
        return arr;
    }
}

function Calculation()
{

    let arr=bil();
    total=arr[0];
    yearcheck=arr[1];
    if(total==-1 && yearcheck==-1)
    {
        document.querySelector('.Invalid-input').innerHTML="Enter Valid Year";
        Year=document.querySelector('.year1').value="";
    }
    else{

        document.querySelector('.Invalid-input').innerHTML="";

        if (total > 0)
        {
            let p;
            p = total % 7;
            if (p == 1)
            {
                    let j=day131(1);
                    document.querySelector('.JAN').innerHTML=`
                    <span>${j}</span>`;                
                if (yearcheck == 2)
                {
                    let f=day428(2);
                    document.querySelector('.FEB').innerHTML=`
                    <span >${f}</span>`;
                    let m=day431(3);
                    document.querySelector('.MAR').innerHTML=`
                    <span >${m}</span>`;
                    let al=day730(4);
                    document.querySelector('.APR').innerHTML=`
                    <span >${al}</span>`;
                    let my=day231(5);
                    document.querySelector('.MAY').innerHTML=`
                    <span >${my}</span>`;
                    let je=day530(6);
                    document.querySelector('.JUN').innerHTML=`
                    <span >${je}</span>`;
                    let jy=day731(7);
                    document.querySelector('.JUL').innerHTML=`
                    <span>${jy}</span>`;
                    let ag=day331(8);
                    document.querySelector('.AUG').innerHTML=`
                    <span>${ag}</span>`;
                    let sr=day630(9);
                    document.querySelector('.SEP').innerHTML=`
                    <span >${sr}</span>`;
                    let or=day131(10);
                    document.querySelector('.OCT').innerHTML=`
                    <span>${or}</span>`;
                    let nr=day430(11);
                    document.querySelector('.NOV').innerHTML=`
                    <span >${nr}</span>`;
                    let dr=day631(12);
                    document.querySelector('.DEC').innerHTML=`
                    <span>${dr}</span>`;
                }
                else
                {


                    let f=day429(2);
                    document.querySelector('.FEB').innerHTML=`
                    <span >${f}</span>`;
                    let m=day531(3);
                    document.querySelector('.MAR').innerHTML=`
                    <span >${m}</span>`;
                    let al=day130(4);
                    document.querySelector('.APR').innerHTML=`
                    <span >${al}</span>`;
                    let my=day331(5);
                    document.querySelector('.MAY').innerHTML=`
                    <span >${my}</span>`;
                    let je=day630(6);
                    document.querySelector('.JUN').innerHTML=`
                    <span >${je}</span>`;
                    let jy=day131(7);
                    document.querySelector('.JUL').innerHTML=`
                    <span>${jy}</span>`;
                    let ag=day431(8);
                    document.querySelector('.AUG').innerHTML=`
                    <span>${ag}</span>`;
                    let sr=day730(9);
                    document.querySelector('.SEP').innerHTML=`
                    <span >${sr}</span>`;
                    let or=day231(10);
                    document.querySelector('.OCT').innerHTML=`
                    <span>${or}</span>`;
                    let nr=day530(11);
                    document.querySelector('.NOV').innerHTML=`
                    <span >${nr}</span>`;
                    let dr=day731(12);
                    document.querySelector('.DEC').innerHTML=`
                    <span>${dr}</span>`;
                }
            }
            if (p == 2)
            {
                    let j=day231(1);
                    document.querySelector('.JAN').innerHTML=`
                    <span>${j}</span>`;              
                 if (yearcheck == 2)
                {


                    let f=day528(2);
                    document.querySelector('.FEB').innerHTML=`
                    <span >${f}</span>`;
                    let m=day531(3);
                    document.querySelector('.MAR').innerHTML=`
                    <span >${m}</span>`;
                    let al=day130(4);
                    document.querySelector('.APR').innerHTML=`
                    <span >${al}</span>`;
                    let my=day331(5);
                    document.querySelector('.MAY').innerHTML=`
                    <span >${my}</span>`;
                    let je=day630(6);
                    document.querySelector('.JUN').innerHTML=`
                    <span >${je}</span>`;
                    let jy=day131(7);
                    document.querySelector('.JUL').innerHTML=`
                    <span>${jy}</span>`;
                    let ag=day431(8);
                    document.querySelector('.AUG').innerHTML=`
                    <span>${ag}</span>`;
                    let sr=day730(9);
                    document.querySelector('.SEP').innerHTML=`
                    <span >${sr}</span>`;
                    let or=day231(10);
                    document.querySelector('.OCT').innerHTML=`
                    <span>${or}</span>`;
                    let nr=day530(11);
                    document.querySelector('.NOV').innerHTML=`
                    <span >${nr}</span>`;
                    let dr=day731(12);
                    document.querySelector('.DEC').innerHTML=`
                    <span>${dr}</span>`;

                }

                else
                {

                    let f=day529(2);
                    document.querySelector('.FEB').innerHTML=`
                    <span >${f}</span>`;
                    let m=day631(3);
                    document.querySelector('.MAR').innerHTML=`
                    <span >${m}</span>`;
                    let al=day230(4);
                    document.querySelector('.APR').innerHTML=`
                    <span >${al}</span>`;
                    let my=day431(5);
                    document.querySelector('.MAY').innerHTML=`
                    <span >${my}</span>`;
                    let je=day730(6);
                    document.querySelector('.JUN').innerHTML=`
                    <span >${je}</span>`;
                    let jy=day231(7);
                    document.querySelector('.JUL').innerHTML=`
                    <span>${jy}</span>`;
                    let ag=day531(8);
                    document.querySelector('.AUG').innerHTML=`
                    <span>${ag}</span>`;
                    let sr=day130(9);
                    document.querySelector('.SEP').innerHTML=`
                    <span >${sr}</span>`;
                    let or=day331(10);
                    document.querySelector('.OCT').innerHTML=`
                    <span>${or}</span>`;
                    let nr=day630(11);
                    document.querySelector('.NOV').innerHTML=`
                    <span >${nr}</span>`;
                    let dr=day131(12);
                    document.querySelector('.DEC').innerHTML=`
                    <span>${dr}</span>`;

                }
            }
            if (p == 3)
            {

                let j=day331(1);
                    document.querySelector('.JAN').innerHTML=`
                    <span>${j}</span>`;
           
                if (yearcheck == 2)
                {


                    let f=day628(2);
                    document.querySelector('.FEB').innerHTML=`
                    <span >${f}</span>`;
                    let m=day631(3);
                    document.querySelector('.MAR').innerHTML=`
                    <span >${m}</span>`;
                    let al=day230(4);
                    document.querySelector('.APR').innerHTML=`
                    <span >${al}</span>`;
                    let my=day431(5);
                    document.querySelector('.MAY').innerHTML=`
                    <span >${my}</span>`;
                    let je=day730(6);
                    document.querySelector('.JUN').innerHTML=`
                    <span >${je}</span>`;
                    let jy=day231(7);
                    document.querySelector('.JUL').innerHTML=`
                    <span>${jy}</span>`;
                    let ag=day531(8);
                    document.querySelector('.AUG').innerHTML=`
                    <span>${ag}</span>`;
                    let sr=day130(9);
                    document.querySelector('.SEP').innerHTML=`
                    <span >${sr}</span>`;
                    let or=day331(10);
                    document.querySelector('.OCT').innerHTML=`
                    <span>${or}</span>`;
                    let nr=day630(11);
                    document.querySelector('.NOV').innerHTML=`
                    <span >${nr}</span>`;
                    let dr=day131(12);
                    document.querySelector('.DEC').innerHTML=`
                    <span>${dr}</span>`;
                }
                else
                {



                    let f=day629(2);
                    document.querySelector('.FEB').innerHTML=`
                    <span >${f}</span>`;
                    let m=day731(3);
                    document.querySelector('.MAR').innerHTML=`
                    <span >${m}</span>`;
                    let al=day330(4);
                    document.querySelector('.APR').innerHTML=`
                    <span >${al}</span>`;
                    let my=day531(5);
                    document.querySelector('.MAY').innerHTML=`
                    <span >${my}</span>`;
                    let je=day130(6);
                    document.querySelector('.JUN').innerHTML=`
                    <span >${je}</span>`;
                    let jy=day331(7);
                    document.querySelector('.JUL').innerHTML=`
                    <span>${jy}</span>`;
                    let ag=day631(8);
                    document.querySelector('.AUG').innerHTML=`
                    <span>${ag}</span>`;
                    let sr=day230(9);
                    document.querySelector('.SEP').innerHTML=`
                    <span >${sr}</span>`;
                    let or=day431(10);
                    document.querySelector('.OCT').innerHTML=`
                    <span>${or}</span>`;
                    let nr=day730(11);
                    document.querySelector('.NOV').innerHTML=`
                    <span >${nr}</span>`;
                    let dr=day231(12);
                    document.querySelector('.DEC').innerHTML=`
                    <span>${dr}</span>`;
                }
            }
            if (p == 4)
            {

                    let j=day431(1);
                    document.querySelector('.JAN').innerHTML=`
                    <span>${j}</span>`;

                if (yearcheck == 2)
                {

                    let f=day728(2);
                    document.querySelector('.FEB').innerHTML=`
                    <span >${f}</span>`;
                    let m=day731(3);
                    document.querySelector('.MAR').innerHTML=`
                    <span >${m}</span>`;
                    let al=day330(4);
                    document.querySelector('.APR').innerHTML=`
                    <span >${al}</span>`;
                    let my=day531(5);
                    document.querySelector('.MAY').innerHTML=`
                    <span >${my}</span>`;
                    let je=day130(6);
                    document.querySelector('.JUN').innerHTML=`
                    <span >${je}</span>`;
                    let jy=day331(7);
                    document.querySelector('.JUL').innerHTML=`
                    <span>${jy}</span>`;
                    let ag=day631(8);
                    document.querySelector('.AUG').innerHTML=`
                    <span>${ag}</span>`;
                    let sr=day230(9);
                    document.querySelector('.SEP').innerHTML=`
                    <span >${sr}</span>`;
                    let or=day431(10);
                    document.querySelector('.OCT').innerHTML=`
                    <span>${or}</span>`;
                    let nr=day730(11);
                    document.querySelector('.NOV').innerHTML=`
                    <span >${nr}</span>`;
                    let dr=day231(12);
                    document.querySelector('.DEC').innerHTML=`
                    <span>${dr}</span>`;


                }
                else
                {


                    let f=day729(2);
                    document.querySelector('.FEB').innerHTML=`
                    <span >${f}</span>`;
                    let m=day131(3);
                    document.querySelector('.MAR').innerHTML=`
                    <span >${m}</span>`;
                    let al=day430(4);
                    document.querySelector('.APR').innerHTML=`
                    <span >${al}</span>`;
                    let my=day631(5);
                    document.querySelector('.MAY').innerHTML=`
                    <span >${my}</span>`;
                    let je=day230(6);
                    document.querySelector('.JUN').innerHTML=`
                    <span >${je}</span>`;
                    let jy=day431(7);
                    document.querySelector('.JUL').innerHTML=`
                    <span>${jy}</span>`;
                    let ag=day731(8);
                    document.querySelector('.AUG').innerHTML=`
                    <span>${ag}</span>`;
                    let sr=day330(9);
                    document.querySelector('.SEP').innerHTML=`
                    <span >${sr}</span>`;
                    let or=day531(10);
                    document.querySelector('.OCT').innerHTML=`
                    <span>${or}</span>`;
                    let nr=day130(11);
                    document.querySelector('.NOV').innerHTML=`
                    <span >${nr}</span>`;
                    let dr=day331(12);
                    document.querySelector('.DEC').innerHTML=`
                    <span>${dr}</span>`;

                }
            }
            if (p == 5)
            {

                let j=day531(1);
                    document.querySelector('.JAN').innerHTML=`
                    <span>${j}</span>`;

                if (yearcheck == 2)
                {

                    let f=day128(2);
                    document.querySelector('.FEB').innerHTML=`
                    <span >${f}</span>`;
                    let m=day131(3);
                    document.querySelector('.MAR').innerHTML=`
                    <span >${m}</span>`;
                    let al=day430(4);
                    document.querySelector('.APR').innerHTML=`
                    <span >${al}</span>`;
                    let my=day631(5);
                    document.querySelector('.MAY').innerHTML=`
                    <span >${my}</span>`;
                    let je=day230(6);
                    document.querySelector('.JUN').innerHTML=`
                    <span >${je}</span>`;
                    let jy=day431(7);
                    document.querySelector('.JUL').innerHTML=`
                    <span>${jy}</span>`;
                    let ag=day731(8);
                    document.querySelector('.AUG').innerHTML=`
                    <span>${ag}</span>`;
                    let sr=day330(9);
                    document.querySelector('.SEP').innerHTML=`
                    <span >${sr}</span>`;
                    let or=day531(10);
                    document.querySelector('.OCT').innerHTML=`
                    <span>${or}</span>`;
                    let nr=day130(11);
                    document.querySelector('.NOV').innerHTML=`
                    <span >${nr}</span>`;
                    let dr=day331(12);
                    document.querySelector('.DEC').innerHTML=`
                    <span>${dr}</span>`;

                }
                else
                {


                    let f=day129(2);
                    document.querySelector('.FEB').innerHTML=`
                    <span >${f}</span>`;
                    let m=day231(3);
                    document.querySelector('.MAR').innerHTML=`
                    <span >${m}</span>`;
                    let al=day530(4);
                    document.querySelector('.APR').innerHTML=`
                    <span >${al}</span>`;
                    let my=day731(5);
                    document.querySelector('.MAY').innerHTML=`
                    <span >${my}</span>`;
                    let je=day330(6);
                    document.querySelector('.JUN').innerHTML=`
                    <span >${je}</span>`;
                    let jy=day531(7);
                    document.querySelector('.JUL').innerHTML=`
                    <span>${jy}</span>`;
                    let ag=day131(8);
                    document.querySelector('.AUG').innerHTML=`
                    <span>${ag}</span>`;
                    let sr=day430(9);
                    document.querySelector('.SEP').innerHTML=`
                    <span >${sr}</span>`;
                    let or=day631(10);
                    document.querySelector('.OCT').innerHTML=`
                    <span>${or}</span>`;
                    let nr=day230(11);
                    document.querySelector('.NOV').innerHTML=`
                    <span >${nr}</span>`;
                    let dr=day431(12);
                    document.querySelector('.DEC').innerHTML=`
                    <span>${dr}</span>`;

                }
            }
            if (p == 6)
            {

                let j=day631(1);
                    document.querySelector('.JAN').innerHTML=`
                    <span>${j}</span>`;

                if (yearcheck == 2)
                {

                    let f=day228(2);
                    document.querySelector('.FEB').innerHTML=`
                    <span >${f}</span>`;
                    let m=day231(3);
                    document.querySelector('.MAR').innerHTML=`
                    <span >${m}</span>`;
                    let al=day530(4);
                    document.querySelector('.APR').innerHTML=`
                    <span >${al}</span>`;
                    let my=day731(5);
                    document.querySelector('.MAY').innerHTML=`
                    <span >${my}</span>`;
                    let je=day330(6);
                    document.querySelector('.JUN').innerHTML=`
                    <span >${je}</span>`;
                    let jy=day531(7);
                    document.querySelector('.JUL').innerHTML=`
                    <span>${jy}</span>`;
                    let ag=day131(8);
                    document.querySelector('.AUG').innerHTML=`
                    <span>${ag}</span>`;
                    let sr=day430(9);
                    document.querySelector('.SEP').innerHTML=`
                    <span >${sr}</span>`;
                    let or=day631(10);
                    document.querySelector('.OCT').innerHTML=`
                    <span>${or}</span>`;
                    let nr=day230(11);
                    document.querySelector('.NOV').innerHTML=`
                    <span >${nr}</span>`;
                    let dr=day431(12);
                    document.querySelector('.DEC').innerHTML=`
                    <span>${dr}</span>`;

                }
                else
                {


                    let f=day229(2);
                    document.querySelector('.FEB').innerHTML=`
                    <span >${f}</span>`;
                    let m=day331(3);
                    document.querySelector('.MAR').innerHTML=`
                    <span >${m}</span>`;
                    let al=day630(4);
                    document.querySelector('.APR').innerHTML=`
                    <span >${al}</span>`;
                    let my=day131(5);
                    document.querySelector('.MAY').innerHTML=`
                    <span >${my}</span>`;
                    let je=day430(6);
                    document.querySelector('.JUN').innerHTML=`
                    <span >${je}</span>`;
                    let jy=day631(7);
                    document.querySelector('.JUL').innerHTML=`
                    <span>${jy}</span>`;
                    let ag=day231(8);
                    document.querySelector('.AUG').innerHTML=`
                    <span>${ag}</span>`;
                    let sr=day530(9);
                    document.querySelector('.SEP').innerHTML=`
                    <span >${sr}</span>`;
                    let or=day731(10);
                    document.querySelector('.OCT').innerHTML=`
                    <span>${or}</span>`;
                    let nr=day330(11);
                    document.querySelector('.NOV').innerHTML=`
                    <span >${nr}</span>`;
                    let dr=day531(12);
                    document.querySelector('.DEC').innerHTML=`
                    <span>${dr}</span>`;

                }
            }
            if (p == 0)
            {

                let j=day731(1);
                    document.querySelector('.JAN').innerHTML=`
                    <span>${j}</span>`;
                   
                if (yearcheck == 2)
                {


                    let f=day328(2);
                    document.querySelector('.FEB').innerHTML=`
                    <span >${f}</span>`;
                    let m=day331(3);
                    document.querySelector('.MAR').innerHTML=`
                    <span >${m}</span>`;
                    let al=day630(4);
                    document.querySelector('.APR').innerHTML=`
                    <span >${al}</span>`;
                    let my=day131(5);
                    document.querySelector('.MAY').innerHTML=`
                    <span >${my}</span>`;
                    let je=day430(6);
                    document.querySelector('.JUN').innerHTML=`
                    <span >${je}</span>`;
                    let jy=day631(7);
                    document.querySelector('.JUL').innerHTML=`
                    <span>${jy}</span>`;
                    let ag=day231(8);
                    document.querySelector('.AUG').innerHTML=`
                    <span>${ag}</span>`;
                    let sr=day530(9);
                    document.querySelector('.SEP').innerHTML=`
                    <span >${sr}</span>`;
                    let or=day731(10);
                    document.querySelector('.OCT').innerHTML=`
                    <span>${or}</span>`;
                    let nr=day330(11);
                    document.querySelector('.NOV').innerHTML=`
                    <span >${nr}</span>`;
                    let dr=day531(12);
                    document.querySelector('.DEC').innerHTML=`
                    <span>${dr}</span>`;

                }
                else
                {

                    let f=day329(2);
                    document.querySelector('.FEB').innerHTML=`
                    <span >${f}</span>`;
                    let m=day431(3);
                    document.querySelector('.MAR').innerHTML=`
                    <span >${m}</span>`;
                    let al=day730(4);
                    document.querySelector('.APR').innerHTML=`
                    <span >${al}</span>`;
                    let my=day231(5);
                    document.querySelector('.MAY').innerHTML=`
                    <span >${my}</span>`;
                    let je=day530(6);
                    document.querySelector('.JUN').innerHTML=`
                    <span >${je}</span>`;
                    let jy=day731(7);
                    document.querySelector('.JUL').innerHTML=`
                    <span>${jy}</span>`;
                    let ag=day331(8);
                    document.querySelector('.AUG').innerHTML=`
                    <span>${ag}</span>`;
                    let sr=day630(9);
                    document.querySelector('.SEP').innerHTML=`
                    <span >${sr}</span>`;
                    let or=day131(10);
                    document.querySelector('.OCT').innerHTML=`
                    <span>${or}</span>`;
                    let nr=day430(11);
                    document.querySelector('.NOV').innerHTML=`
                    <span >${nr}</span>`;
                    let dr=day631(12);
                    document.querySelector('.DEC').innerHTML=`
                    <span>${dr}</span>`;

                }
            }
        }
    }
}