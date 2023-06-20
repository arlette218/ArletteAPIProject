using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using kCura.EventHandler;

namespace PageInteractionEventHandlers
{
    [kCura.EventHandler.CustomAttributes.Description("HelloCoffee Page Interaction EventHandler")]
    [System.Runtime.InteropServices.Guid("994197D7-167D-4406-A150-15292368A7AB")]
    public class FormsEventHandler : kCura.EventHandler.PageInteractionEventHandler
    {
        public override Response PopulateScriptBlocks()
        {
            return new kCura.EventHandler.Response();
        }

        public override string[] ScriptFileNames => new string[] { "coffeeEventHandler.js" };

    }
}
