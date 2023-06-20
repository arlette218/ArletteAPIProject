using Relativity.Kepler.Services;

namespace CoffeeKepler.Interfaces.CoffeeManagement
{
    /// <summary>
    /// CoffeeManagement Module Interface.
    /// </summary>
    [ServiceModule("CoffeeManagement Module")]
    [RoutePrefix("coffee-management", VersioningStrategy.Namespace)]
    public interface ICoffeeManagementModule
    {
    }
}