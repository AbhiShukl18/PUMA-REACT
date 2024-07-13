import React from 'react'
import "../Styles/footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter,faYoutube,faPinterest,faInstagram,faFacebook } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (

    <>  
    <link rel="stylesheet" href="../Styles/footer.css" />

    <div className='footer-body'>
    <div className='footer-body-first'>

    <div className='first-box'>
        <h2>SUPPORT</h2>
        <p>Contact Us</p>
        <p>Promotions & Sale</p>
        <p>Track Order</p>
        <p>Shoe Care</p>
        <p>Tech Glossary</p>
        <p>Initiate Return / Exchange</p>
        <p>Running Shoes</p>
    </div>
    <div className='second-box'>

    <p>FAQs</p>
    <p>My Account</p>
    <p>Exchange & Return Policy</p>
    <p>Privacy Policy</p>
    <p>Terms & Conditions</p>
    <p>Sneakers</p>
    <p>Cookie Settings</p>


    </div>
    <div className='third-box'>
    <h2>ABOUT</h2>
    <p>Company</p>
    <p>Corporate News</p>
    <p>Press Center</p>
    <p>Investors</p>
    <p>Sustainability</p>
    <p>Careers</p>
    <p>Store Locator</p>
    <p>PUMA Articles</p>
    </div>
    <div className='fourth-box'>
    <h2>STAY UP TO DATE</h2>

    <h4>Sign Up for Email</h4>
    <ul>
        <li> <FontAwesomeIcon icon={faYoutube} /> </li>
        <li><FontAwesomeIcon icon={faTwitter} style={{color: "#ffffff",}} /> </li>
        <li><FontAwesomeIcon icon={faPinterest} style={{color: "#ffffff",}} /></li>
        <li><FontAwesomeIcon icon={faInstagram} style={{color: "#ffffff",}} /></li>
        <li><FontAwesomeIcon icon={faFacebook} style={{color: "#ffffff",}} /></li>
    </ul>
    <div className='explore'>
    <p>EXPLORE</p>
    </div>
    </div>

    </div>
    
    <div className='footer-body-last'>

        <div className='box1'>

          <p><img
                    src="data:image/png;base64,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"
                    alt="visa"
                    width="100%"
                    height="28px"
                  /></p>
          <p><img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASIAAACuCAMAAAClZfCTAAABtlBMVEX/////mQDMAADIAAAAAGb/nAD/ngAAAGj/lwD/kQD/mADNAAD/lAAAAGfRAAD/lQAAAFrRGwDVAAAAAGAAAFzeTADvdQAAAGLTJwDvxMQAAFZ6AEQeHm/4iADnpqb88/Pg4Of56enW1uFwAEr/4cX99/ejYkG4uMv/+vTu7vP/8+jPIyPWVlbsuLgAAE+MVEr/0KP/w4f019fRNjb/pTrZZGTde3v/2rf/unPURkbLy9mGAEHqsrL/zZz34uL/r1b/6NPikZH/tWZfX4+dnbjCABCPj65jAE7abGzYXl7/qknkmZnuwcH/uG3/7Nn/ozFwcJq6ABlJAFeQADmtACZISIKDg6YsAF/rbQDdhSKATU1SUofghYX/wIBoaJQwMHbvkBM0H1+oqMDMei2hAC5KSoO8vM6XADVkPFXiVwDaQwrNm327ZxRxOD1HIVBWNFhwQlC/Pkg7AFs2AEezaziWVj2XhpfUfyfJh1eml6WkABOTcpBoADeuZnkAAEUlJXBSAEvgwq1+QTp/AClJO3dJAEGSABzDtbq6jZ2VSWdaSXMqKnOtTV9uNGWwajpOG0KfAAg+JV23mhSoAAAZtElEQVR4nO1dCXvbRnqmiIMEAQI0yQQRrZA6LUqmZZI6KMrUfVqSdVmWIps6bPnKbuK4jr3uJm7t7SZN27S7zT/uDI45AJDiCTBP932exCIIYgYv5jtn8I3P9w94gVQfRMrFFtPpUYh02sU2G0Bfd3Jxo3jTz2D4bxY3FpPdc+1qcmcwm1va5CQBQ+I2l3LZwdF2Ndko8smpcciIM8A34xvJfGubXMje2wWESEowGOoiEQoqigRI253OLrS2yYaR3ypWJIcmanyxuzVNDuZ2BUlRaGqsCCmAp4ncYGuabBip0t2a6ME0ZZJ9zTU5mt0E9FRnByMIeJrPeiZ1Q8liPfQgmsaTDSvy0VkwfII10oNokoSJrBd6vPtuI/wYLGVuNdJkYVOoefjYWJovtJqB6kht+RsnSCPJX65T4EZPpbrHD82SknNP4OY2muPHYOluHTZuYV5QmuBHQ0gRlnbaxwqBfKYVBGkkFWskaXBCaGYAYSjC5kJbyYGYaxlBNZO0sNsigiCCwmZ7R1KqJSJGkZS5QieNbraQIJ2k+TbqpMVWE6SRNFWlxfR0iwmCUIRcmwjqbgM/OkqVmsxKTStpZ5KC7XABhprwg64CU3SUttEJoS0EAYSE+ZY7k7faxo9OUtLe5GwbZAwjKLR4IE22bwgZHBWH6BbTE1IbCYJo6UDKt5kfHVQaoNDWIaRDURZaxdBWu4eQDqaMmzxtmxYiEWqVaWups1gVprC1X8hMSJstICh10y2CILQU7o7SfiEzoXQ17Ue6o4YQmG6ohhrLeDSGkLTQHEPbrgmZyVEy64oaIjhqzvon3WbI77/WHn+6GoTZxhlyyZQRYD7jXWcIcNSwYWtL1NqBDDXOkQcMfe0NQ41y5IGUecZQYxy5r6m9ZAhwlK2XIdetvWd6CHFUp+3Pu2/t/8BzFNznaKEehlKuE+S/9qUFktskhaR6YhFX4zIDjAV+133IIFc7Q3c9YMiOL1zXTcp8rQx5EHY4wn39XWso4oGqdgbzues6u0aV7TUzGIxbmTWEULAWhia9JoZAZ6oj933GKvDA4b7agxzymhUazJeuqyPpqqkj98Ws6qhlrrlO0VWi1u2+mH3NV4P7cUiXUH2RrfsMMR6QUB2hrmoMbbnPkPu+z5WQqjiQQ+4PIvfNeg0QKmvsDdcZ8sBi1QDlXiWG+rxIEnlNhyOESmkR9wN8xuVpxVoRrGD45/4xiBAE52W1HniNgiUZWxFuU+Q8jDzQRLZMYyV4kBVx0kZT7jNUMzyI+KftDHngE9UO5ku3KXLyjZJe01AV7udoHVzsVa9ZqArGbYYcIjUPQvx6wHzlvsK2Bvzuxx71wQOFvWShqLMHkSd+uEAzdMuDRFF9+Nr9DC2dxc64z9CXZI2GGuA2Q1YP24Nln50anmEIHsuZ+4JTNyhJ8yCX1oEJWSuozJrrDPn9LWAoqEgQ7XsdQsEM0QsdqEU+jkfrqhPijKYzRbAYSC5bGCxkTzeFRqtAOFzVgLa4icgaUfFZspvAIjrcTaHptECT3rIiLJHO78LsbvOlDuBlTwcN5ODlFLxElMzIMlTNExSXbNB+VLMUNZfWDwnTtjh8dLoFHEmI9yy8GmH2cdflqEw1bFAUlS2Vh8YbpcZE1SnYK2Zmg7tOadNs0xRxfAgl0nTCJfMjTlrLL9RHDhRFYzFLfxpURot6lbW+1LZ8rW6IuhHkhD86EGTeVDMMnYQT6GoTmnJDuUf89rQ8oB5R7WqKXNxn9+juNJbEFfHrr42sFdRjEP6bNUeGfJvNGjbuMnyOrqY788gzKqNeRA9iT+wUydfjM3R3GkqdiAyDXsdvSJdBK8h/Sz9DjObl7IaKRsKoTpFivvaAA7SoGu+3UxQ9tspZQynKqKqiCzSky0DMwr06q8BQGgdxsOAcQLBGRyAU0k/kH8ZWzKsN6ksIg+ars6gPIhNIjNgosssZGgTAQRqfnCqXyxtOJecYf3FyY2pjMjMOTxSZ8DN0AfpkhsksJpPJcqbaYiOg4zn+VU8FhnwLOkWweFpwc+k0lztdgjXpEBEK4fAosLihfjgoCV0TuwJ0Gfjv4s/Nq2XNr/WPKdQv8TCg0g1Diuxy5itqfR5f7CY8hPwifUeZW2SVi76yeIj13NAWYMQcvMz4Nr4IWXYjk9RRgknjEmjq5etIL92R/pkZ40gB3pQkbM4uEP7AwrTpLimzWR2nSpewtGCcHxTmB7XTd04FhU/gq58aPzOS/Ni3lu+ztEHTjJ1dzrRBsGUvGldGV2LuWquALMr3LXrO9Ma2qaN5/OYAKpLBMJPwnyexGKWqZx4lIvF4JPFgBQx96Osp9nWK6SV9dKGovSDpGdfdEHwFHc+WpeelADZopu43/OsqBg1S5CBnmkGz9caH1ThjLyc3Ka9b9Jw+oWAthIFUo4x8sT6jfk+PSj6roWcRNhAIhFlWjUX+mF4KctyEU59mAUccx5sfc/pdDwq2heiFBJZiU0ANk4bXXZEGbcTonV++Y8oZUlPdjBj9J6fuGFkVxqHE5c3omwjNhnZqxuEimi6X178329suav/0R7A6BZ1hj2//7e2N268gS4ELheNP3v3JsU85iTt5hb6a0B3opaB9bewwEiGk+xWdRcLmEwZN11yAIiRnSJcBg7Yfs44sA5r0bDl8wUTZOHVAG4pFp2toypE4PalTexSL4HNGXp3w2oIAvuvtb4EAz71nAySDJHa5tyqSUMOMC06rh3vNPxYQRafaZ7TcgTJoT4z7AHJmCB/WA1PyfZXWKwhAMuWnDsf7/PvsMnUECqXofJGk1hfkxxl9UsnH8s94KQTHv/+O594FWJtVMVAI3o4NG38btYwLivBn55P1r83XBoL6NEgRqSLCoPXrTyTFYDnDHSzKA5W64xuXf3BiL+9/qtJucQnQUKnYHOyLVQP2RyK4zQL16gMYSvzrMBsZ8Tkj9NKiBn3T0k8VztWQM3WR4RghE0IatGGTouixQdsTPIyZ6AHqzsgI3bFFJmJTwAAl+Q56ksaJfvlH/Glo5nkv/jQF+qJaxGYlTihrm1vIPw5jybT2af444aPBjfX6qmDeDGZCu9pnR4O2pndwyI/k7AF6hn1MFNqWmZWz83giEYkk4o/w8y19wIGOb+asJx5nz5/9SzkDDBrdqw35A76RvUQ8njgn7IE8EHtOne5bjmPHumB/fybAqg98Q8/Xlj9GQJ8SidgZbi4XC9PXGqXDmJnnlkHWhZ6A7jsiZwYYNPSglw2pEE05G/lXfAN+JvBxORGPqWwY2BNodsdQG90JLCDDYyoLoLKHItD6WNnuxdVPsvgD7uZ5LBBg2Rga/Ck4TvEtalDjWIBtISt3Ail6kIiroE+wR6BVrFf/Ere4e7+MEcNsJRKJR8JUaziYkSwUsRF0p6xBkYzkbAxdIOk/hIY2cHzwaX19/dMx+BBDt9ufwCrn2fGbN8fQeVkV/XIAex3nanhAjuJurn24f38dcJRA/QTGlTBfUO6H47hzadukGvcWtBJgH798/fDhw5cfobfExtHz/iVBqsGRlSd7hJ5bjsPHo5KKbAdfX6AoggYNqZEx46KrppydY/mZku+wAy/25Wg0Ksvg/6sHAUzRMNGdTBRCZvZF6IBigwY6dSf64gH67IeX2QfKBI2TcX/gI3FXP0VicRbrk0GbnHG3e25fXqDk28VvgCN8tZUEoQZnErEYoYnW/u3t29tg3JGOOyHHGkVo7RUwaKx5Un/CuOe/Gragd4wwaP5VwI2o+9Ew1y8mxlADaxHclhHaiOBUmTBo0CMSoxF0ByVGNxZhfFPFfZYI6fdiUHawPsnZEx8XvOkFwEBWEiKJyBhSZnsJrGtGImDIYPpHvwQ/5EOksqeub6GINGgmRW8M1v4cwQYGJsd0fjJb2/m+oaGhkX40TPcIreqbQ0XD5etYz3UD0uSncfST8upNDT3Ytx9/QRi0kcibg+OwikfdUsXsWVCSlmYHd4D3M9Lbj0TiJyJ/caSGHxMjRo9XuYsAS5xDXF+LYzFFAyoxFoxBY1I1gBMFRsqRGXes6/2TSiULzNA9+gm7Jknts2r/LQZgFBu0P60CcQ2rmPrdCpkgGLg7XS1CtBV/y98gnDpDpIBbRZgH4vq0LqIMWtygyDBV+Z/xFfRYdbXCVgPfhyO0BdVHUpRwTWC2SVYr5cY0yJ8IFwEIKtCTOCXoCzlTJE04r5YeSeBE1TBQWI9xV8xIA6h7otuENbBQRBi0A7NDBv9TEXxZOAgYy6QRQupDwHbzMFEtB7CsF6Hes3qGFPpkglE9rUdYBJ/jKhGuYvEYpFgBTkNdocCv6OOsoXWA04BvfrQSReIqzpcM/awa9se4uD+MTfZUterC+X8HUm0NTrYZyqBZVJMDukXCRYCPRDwMEArEgSKO/+aXSlcbTmCPqivEXRKWAE2bXASwmJAGUzJ7bBi0ALpRRJFObfcqcYdFv+iUwtBxiwFOhtXr8y2KT7HjDnVZ9KBikAexRbY3qXeOoMiurbmT40ppf6BY8TMDA4S7QQSLONIgIvhZwmDq3vVNZNBQt0rr9HzaJBmD+uUf6C6QEdGWfB36gNYhAiI09CTzWibTGlhS2KDaMyjCHEzYIrS3lBsFxIDs0xm+ezBAyCw+vtIFkZK+hykyYrSi3aCV1+kMrUjIRcr/A6FGnjyKgSgNBycbfvkYjqNlOpAsr+NRAwVHDkSqUXSTiHk1Ayo/JVWcdVaRuwwQWQDfyoM4iNJwNPArdtSBx8N/R8g4sl0XRGKBMGhGpD9pN2iZARZ7ITBMJ0x2nsGatJeNq2E4atCRceAzQY7UxBFJUvf32MEva448pmhN7aHx4iaZxNUMKMzT4B5Zo1jg1WBj8DwegyEai3lJ4MQHECz+MUGRGexxl4STQag6I19Uths0eYAl4nVfEcSg6A6TH9AAG4mpB+sDAyqLdStUrfI6jJFihB3xpRK4x0XNNOBRdaTfEkJgXwQuAvL7tLwxsGgskQuhKeJfElLY+/PD2w9hFIsG3QgRGABG+AQxzbBkWrQb+OqkQTOyjlt2gyYOsIRspxiZkNRyHMnZf6zCKC16gFWxllMVo4fHGklhPJAimHK9MRxkrkRiEKoJVhbJ9jaM3pHu7yzJEYzysWM7z/Ec30PGe/1jqMMw/uVZQheZmpn/O9Z9pEEzcte3bBFaXrxOGHmYqg5j1fSfuDtFLRABj5yQQv1i0aeatGHZiKGHClkEd4wNVF6O0gBjhmhPn7iNkjQANUtoI+62SthQeH88GEV4GA6PoQG7oFFETPOYIyaIjDmeZoQwZkDyjM2gydfDRFR3UyZMto9QS3rvZRU7r2jCSY6+AKEnli4c3MKpOVEMqNiq21Y0U+0ZAcybsEpmaickQ6eGFOW/9ojcELznUIDIzvjWcFwPlRgfIfrru6fzcaMXHyKNgTGPps/GUgZNvkOM9DmGNNmpMayydBnYj2EJIPYqklfZGB4LY1j+tTtWycia2iELxH7jRHtGRCgPUMoILieCW6RJgnK641uLYXuxG4QGTiWE4Ax/CUN4/jdqKmZJkCRhkzQtZL7OfOXKeEyEQQMU4f4s+mXCZOeJ1JbWffE6Yb43mO5kxq/P78t/xZnWXjzYfalypji1rJJmuqTt0Qf/m4T7p5HtGbOXwOpTkuaD++zlcgXtKS8To2hQULhv4x+Je/4VxxvQU+Rf0lHkaKFAv8FIyBkqZ5SxGjQgdURIBenDBq0UI3raV85MUnsvjDPa4e5ScitZIrZoHB6zuEFHKh3KpfLbt7bz+iz3nEy0ZyxCARqcVc99zuhRCX9+Z3r+jPJcE7ghmJPm3pFeqB1kShOt5CtbDBqwYPfxJ6CqyFnCslppRg9Cvul8fDlhoei/yTSsBdsy0Z65CCW6HmAjFeK6hHWAkRjBBk1TVEAMLZOeNBbgKFIUTSGh9UW3DA/fPCnPyC8wRVOQPux8ZcKktrN150fH430J6z3IlL2jscgE8FfmLB/0jNiY0/yTrzfCVhkX/Tj7qOekuQBb7SlDg6bMZjW/Aq1SgzZGvoMNWtJPUqRlLrAxkcOsZQ0S2R0qj46RYek1HcDzAqFcvMKSvLtke0iNRz8BUXOcIByOA74rdQnIeK/5p+6V868DlWcltTykVJienoAn4/es4ShaJwwaVI4mD9sMNe2Xki3WV4MpRcNjjqIAhoVKr53K+2FGgEhSkCCnw4nFT4zKkjYSYw2453HruBjpNb/FwZruKGoTSjauEWfzweDSUnaicLoZIpbv34UaGbu7RUiRyfMkNLg4gMnDx5+wSM25aX9WrFpZQ5mJAheJ+s02VHeAIyf5AL49YUCxP/DFJRS1c/vz/xHO1lkSMCPIEznDA8wIN/jvgKjRCwx8D9Blg6Hg9GZhcPce4Aqvu05qBg214Scp0pI7+LuSf9Wa7JiJI8W7N+azof9/ZHAFEBGQ97Cl61821mNPG+XlA8KAYofpa/5v0GOP24be+wAM7WLk03keR4riV0yGGcJfaPOaBNf9PcjJhQYtVJgWTgtA4PDq/TkGBk29OubAgwPKOz6jfdjS/Dz0Xd+UPzqgJTvMDs08+gDsST/ATD5/Hlt+0k8+5t6V8zFRhLqNnNfqK40bNopVIz0rJHcjM4siaG9ER18fXlrLfM4BjuD8mLpG/GJkMMe91jhK7BmHR/5yHmFV2KOFhYW+yJF2qd6RURSfQqMGWj4yzn/+4O/qx154C/29O1AFBTcL2cJEiKocontmEYjvZUbLg2ofx2SoBPxAvWmI/6/uZGoNsGdHa0fPIrH7+8ZPY3CAqeDPRPj8waPl5eUHPYm4uq5NuEVhyBaPna2trBw9Uo0X3qP3tXnQWCT+bA98sXa090xNxESRodszKQJDgD9JQDZikdjy0cqTJytHz2JjXUoX91gfR4mevbW1vV+/eQ8nY+E0dJcUfBdQ9Yu9CmKHh3+rhdkR9dHZ8nlEfXditBj/Nqhp9JC+tzHxJpFvA7jTBtY1Vg71D3fID/rEs57sgF1SQXQePt6Pml+r0afwH22OXw/Zw4E3h1Et1BVXY/qSO/AbNmDOw8nMgLEUT9WDfTYQOIha2zNVEXz3iONusAHzStoPXmqvJL3UegTbZV9d8G+Nn7/iYaLEwEPy3SX+5LHRsBr47QSMTgM3yFdTqKIY2+KL6wYONVZW9Q86JYfmd9dl4/EfrrMaKeuAAXH/jo77srz64vqnN8dwMQTo8pv1+6tR2bRH8nVVJ/Lgzr55EBwVX6wfm/1T3wy8WAVx/uGACRkzZL57xHGXD3uMHyRevrs01ky/f631qOf2CWDi5IaOSw740rcNXFIv5nD85Wt4mce33/PgksYP3p2Q59DvDzMygtF3DSL5wfxOOxJd3d9notoREX8rynpiQ9bm+s3fo58cHoLfRMmj2nFxdR98s+o3f2Bvz0++hc7xfOjk/eX7iy4ezVLDgxcXFyHjAFHTp2KBHw6+d8Px9EnUGfRb6PUXwBJFUbz6LNtP8G/+8Fl9oN/xc6GmkeUNaw/eH/6ssTet3IPlPX0val66fs91wlLtwYt3rN2vlFIXbJULPSiV3pFVLzHsBdTd37ShUysW6gjZt3PwoAqWpxvsXAXJYQMeD8rzdLIycqoz635FPuarTi3riKZhaXhQ1/Ha57XhKw82J3SsMutBrbAayzu5X8jHViVMhwc1ZmtDpxQH9XXWDiAkOqDUnIfaqBZ4UDa8Yr3rDi0z2xkFZg10ZJ1ZLwZRld1S3N/l82p0RHlZAh1YadbNPb81VN8HxJO90b6ohmveFJfNFirvkeqB//h5Z2UbocGfXSikK++16z5F/rZV1GsEISnt29nJprM7zu/c+Dyp6txR+zjACgc7O7Oz6coU/T9P0ep+9eyCb7CaWfMg0y90CkeGNUtns9lqO8l5EM52TE3eCluk2ODBvrEeb/FtotZ9Yz3ZV8YhAek+Q7XvPtx4ZctmOLLlGt3fZWe3doa82AndloF0PXoNXbnXJwXPM5BeZBprVNUmPN4XBOgm1xmqvtGnA0pecuTFrsOV49aK8HDLeKZzt4mn4Vl+zQuGKsf1ncjR74ghj2TtdyNlOjzQ2b8TTY3huu1nbhVcXnYUcqiBWRfmXGaoG7666WZGPyjV6THakXJz+ZpeVn005N5KEIWrK+qogEm3hI0xK86mJ+x1G9sDoY7YvhpcMmzMIm4y54pCCjVjymi4E9RSBWcHpfbPiyihhVYx5IPv37eZHyZjeTM4vdnugSRUWiHTILbbzFDJ3mRWaOdAUqzvL7QAbRxITMZexx9gdLNt5j8kzLfCklnR3bY1EduVmiwo7TH/UlfdyaEa0Za4lilXa/K0DdKmNB61Xo2hqVaTxExad8OwYHS+xSQFhXvtkDGMvpY6kkymUml5AjubLSQpKMxXXMfYMsy1jKSaCIJY2GzJHnpQxOabjshqQl9LxI3ZmLu6KRM7S81vxxhShHvtH0EmhrZWm2OJ8S862vnKGM0pTTncQaFrtr06yIbuJvwk5m5FM18NhXmhQZaCEr39pWsoZRrZHZUpJh2rENWCdHaifpYAP5sFlwcQxtCtjWpbmtnpYSZLdQqYFeksGEs176YbVARpyTt+DOS3qu78RtBT3KrRgl2FwdymAHiqrr9DiiTA7dJa02TTmCuVi/6KUscAdqZKLaLHxE52ehfwJFk3HAzBbQglSZAmTgvuGPg6kMqXtqbujovkPs7jmanFUv4KB7pxjA5mc/fmd4MCRmh3fjpXGHTPujeIoVQq1bBObgjpdHo03R6d83/5EcwDwVhQHQAAAABJRU5ErkJggg=="
                    alt="mastercard"
                    width="100%"
                    height="28px"
                  /></p>
          <p><img
                    src="https://upload.wikimedia.org/wikipedia/commons/4/4d/Maestro_logo.png"
                    alt="maestro"
                    width="100%"
                    height="28px"
                  /></p>
          <p>
          <img
                    src="https://1000logos.net/wp-content/uploads/2016/10/American-Express-Color.png"
                    alt="rupay"
                    width="100%"
                    height="28px"
                  />
          </p>
        </div>
        <div className='box2'>
          <div className='box2-child'>
            <p className='circle'>
              {/* <img src="https://cdn.pixabay.com/photo/2012/04/10/23/03/india-26828_640.png" alt="flag" /> */}
            </p>
            <p>INDIA</p>
          </div>
        </div>
        <div className='box3'>
          <p>© PUMA INDIA LTD, 2024. ALL RIGHTS RESERVED.</p>
          <p><u>IMPRINT AND LEGAL DATA</u></p>
        </div>
    </div>
   
    </div>
    </>
  )
}

export default Footer
