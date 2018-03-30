using ReactNative.Bridge;
using System;
using System.Collections.Generic;
using Windows.ApplicationModel.Core;
using Windows.UI.Core;

namespace My.Custom.Lib.RNMyCustomLib
{
    /// <summary>
    /// A module that allows JS to share data.
    /// </summary>
    class RNMyCustomLibModule : NativeModuleBase
    {
        /// <summary>
        /// Instantiates the <see cref="RNMyCustomLibModule"/>.
        /// </summary>
        internal RNMyCustomLibModule()
        {

        }

        /// <summary>
        /// The name of the native module.
        /// </summary>
        public override string Name
        {
            get
            {
                return "RNMyCustomLib";
            }
        }
    }
}
