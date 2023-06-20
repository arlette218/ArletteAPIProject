using kCura.EventHandler;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PageInteractionEventHandlers
{
    [System.Runtime.InteropServices.Guid("37F0BA46-F911-42F1-89E3-73861750D73E")]
    [kCura.EventHandler.CustomAttributes.Description("Sample List Page Interaction event handler")]
    public class ListEventHandler : kCura.EventHandler.ListPageInteractionEventHandler
    {
        public override Response PopulateScriptBlocks()
        {
            return new Response();
        }

        public override string[] ScriptFileNames => new string[] { "listEventHandler.js" };
    }
}
