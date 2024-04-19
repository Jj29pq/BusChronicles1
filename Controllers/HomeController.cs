using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace BusChronicles.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        public ActionResult Pag_Princi()
        {
            return View();
        }

        public ActionResult index()
        {

            return View();
        }

        public ActionResult NonRegister()
        {

            return View();

        }

        public ActionResult Despacha()
        {

            return View();

        }

        public ActionResult User()

        { 
            return View(); 

        }
    }
}